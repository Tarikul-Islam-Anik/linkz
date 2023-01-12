export default function Color(label) {
  switch (label.toLowerCase()) {
    case 'facebook':
      return '#5c79ff'
    case 'twitter':
      return '#1da1f2'
    case 'linkedin':
      return '#0073af'
    case 'github':
      return '#2a2f35'
    case 'discord':
      return '#5865F2'
    case 'steam':
      return '#1b2838'
    case 'messenger':
      return '#0084ff'
    case 'whatsapp':
      return '#24cc63'
    case 'mail':
      return '#000000'
    case 'instagram':
      return '#cf2872'
    case 'youtube':
      return '#ff0000'
    case 'dribble':
      return '#e34a85'
    case 'snapchat':
      return '#f7f400'
    case 'tiktok':
      return '#010101'
    case 'tumblr':
      return '#334459'
    case 'reddit':
      return '#f76013'
    case 'pinterest':
      return '#df0022'
    case 'spotify':
      return '#1dd05e'
    case 'xbox':
      return '#2b9d41'
    case 'playstation':
      return '#006cc7'
    case 'twitch':
      return '#8c44f7'
    case 'stackoverflow':
      return '#e87e34'
    case 'skype':
      return '#00aae8'
    case 'viber':
      return '#6f5dea'
    case 'slack':
      return '#481449'
    case 'telegram':
      return '#0084c6'

    default:
      return null
  }
}
