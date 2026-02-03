const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");

const apiId = 34680190; // Твой ID
const apiHash = "61d957b6c7fb076690f6f465ee9c6fbf"; // Твой Hash
const stringSession = new StringSession(""); // Пустая строка для начала

(async () => {
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  // Логика авторизации здесь
})();