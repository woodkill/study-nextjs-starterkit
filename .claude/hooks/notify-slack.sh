#!/usr/bin/env bash
# Claude Code Notification 이벤트 발생 시 Slack으로 알림 전송
set -euo pipefail

# jq 의존성 확인
command -v jq >/dev/null 2>&1 || { echo "jq가 설치되어 있지 않습니다" >&2; exit 0; }

# .env에서 SLACK_WEBHOOK_URL 로드
if [ -f "${CLAUDE_PROJECT_DIR}/.env" ]; then
  source "${CLAUDE_PROJECT_DIR}/.env"
fi

if [ -z "${SLACK_WEBHOOK_URL:-}" ]; then
  echo "SLACK_WEBHOOK_URL이 설정되지 않았습니다" >&2
  exit 0
fi

# stdin으로 훅 입력 JSON 수신
INPUT=$(cat)

TITLE=$(echo "$INPUT" | jq -r '.title // "알림"')
MESSAGE=$(echo "$INPUT" | jq -r '.message // ""')
PROJECT=$(basename "${CLAUDE_PROJECT_DIR}")

# Slack Block Kit 메시지 구성
PAYLOAD=$(jq -n \
  --arg title "$TITLE" \
  --arg message "$MESSAGE" \
  --arg project "$PROJECT" \
  '{
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: (":bell: *Claude Code 권한 요청*\n*프로젝트:* `" + $project + "`")
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: ("*" + $title + "*\n" + $message)
        }
      }
    ]
  }')

curl -s --max-time 5 -X POST \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD" \
  "$SLACK_WEBHOOK_URL" > /dev/null 2>&1 || true
