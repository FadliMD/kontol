const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
•·––––––––––––––––––––––––––·•
❑ *Nama* : Fadhli Ilhami
❑ *Umur* : 18 Tahun
❑ *Status* : Penganguran
❑ *Ulang Tahun* : 16 JANUARI 2004
❑ *Alamat* : Indonesia, Sumatera Barat, Bukittinggi
•·––––––––––––––––––––––––––·•
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya7)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'salam kenal bang👋',
           hydratedButtons: [{
             urlButton: {
               displayText: 'GroupBot',
               url: gc
             }

           },
                {
               urlButton: {
               displayText: 'Link Instagram',
               url: web
             }

           },
               {
             quickReplyButton: {
               displayText: 'Sewa Bot',
               id: '.sewazifa',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi bang',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(biodata)$/i
handler.help = ['biodata']
module.exports = handler
