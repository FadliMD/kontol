let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/2fc0cbfc09b144f38d51b.jpg', m, { packname: "zifabotz", author: "@rozi" })
}

handler.customPrefix = /^(bebanjoin)$/i
handler.command = new RegExp

module.exports = handler
