{
  "name": "Queue Mode Test - Wait 30s",
  "nodes": [
    {
      "parameters": {},
      "id": "ManualTrigger_1",
      "name": "Manual Trigger",
      "type": "n8n-nodes-base.manualTrigger",
      "typeVersion": 1,
      "position": [240, 300]
    },
    {
      "parameters": {
        "amount": 30,
        "unit": "seconds"
      },
      "id": "Wait_1",
      "name": "Wait 30 Seconds",
      "type": "n8n-nodes-base.wait",
      "typeVersion": 1,
      "position": [460, 300],
      "webhookId": "queue-test-wait-30s"
    },
    {
      "parameters": {
        "values": {
          "string": [
            {
              "name": "status",
              "value": "completed"
            }
          ]
        },
        "options": {}
      },
      "id": "Set_1",
      "name": "Set Result",
      "type": "n8n-nodes-base.set",
      "typeVersion": 2,
      "position": [680, 300]
    }
  ],
  "connections": {
    "Manual Trigger": {
      "main": [
        [
          {
            "node": "Wait 30 Seconds",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Wait 30 Seconds": {
      "main": [
        [
          {
            "node": "Set Result",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {},
  "versionId": "queue-test-v1"
}
