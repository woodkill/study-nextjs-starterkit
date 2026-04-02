#!/usr/bin/env bash
# Claude Code Stop 이벤트 발생 시 Slack으로 알림 전송
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

# 무한 루프 방지: stop_hook_active가 true이면 즉시 종료
STOP_HOOK_ACTIVE=$(echo "$INPUT" | jq -r '.stop_hook_active // false')
if [ "$STOP_HOOK_ACTIVE" = "true" ]; then
  exit 0
fi

PROJECT=$(basename "${CLAUDE_PROJECT_DIR}")
SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // "unknown"')

# Slack Block Kit 메시지 구성
PAYLOAD=$(jq -n \
  --arg project "$PROJECT" \
  --arg session "$SESSION_ID" \
  '{
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: (":white_check_mark: *Claude Code 작업 완료*\n*프로젝트:* `" + $project + "`")
        }
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: ("세션: `" + $session + "`")
          }
        ]
      }
    ]
  }')

curl -s --max-time 5 -X POST \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD" \
  "$SLACK_WEBHOOK_URL" > /dev/null 2>&1 || true
