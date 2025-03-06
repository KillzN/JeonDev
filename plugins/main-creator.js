let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;KILL 👑;\nFN:KILL 👑\nORG:KILL 👑\nTITLE:\nitem1.TEL;waid=56920027086:56920027086\nitem1.X-ABLabel:KILL 👑\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:KILL 👑\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'KILL ⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
