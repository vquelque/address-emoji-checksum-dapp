const allEmojis = [
  '🙂',
  '😐',
  '😢',
  '😂',
  '😍',
  '😎',
  '😡',
  '😱',
  '😴',
  '😆',
  '😇',
  '🥳',
  '🤔',
  '🤗',
  '🤭',
  '😜',
  '🤪',
  '🤫',
  '🤨',
  '🤩',
  '🤑',
  '😤',
  '😷',
  '🤒',
  '🤕',
  '🤧',
  '🤮',
  '🥶',
  '🥵',
  '😬',
  '😏',
  '🙃',
  '🤤',
  '😲',
  '🥱',
  '🧐',
  '🤠',
  '🥸',
  '🥳',
  '😵',
  '🤐',
  '🫢',
  '😋',
  '🥰',
  '🫠',
  '🤡',
  '😺',
  '😿',
  '😻',
  '🙋‍♂️',
  '😈',
  '🧑‍🍳',
  '🥷',
  '👷',
  '🏌',
  '🏂',
  '🧙',
  '⛷',
  '👻',
  '👾',
  '🤖',
  '💩',
  '🐶',
  '🦊',
  '🐼',
  '🐻',
  '🦁',
  '🐷',
  '🐸',
  '🐵',
  '🐧',
  '🦉',
  '🦄',
  '🐴',
  '🐍',
  '🐢',
  '🐌',
  '🐛',
  '🦋',
  '🐝',
  '🐞',
  '🦀',
  '🕸',
  '🦠',
  '🐙',
  '🦞',
  '🐟',
  '🐳',
  '🦈',
  '🐘',
  '🦒',
  '🐪',
  '🐓',
  '🦩',
  '🐇',
  '🦋',
  '🐌',
  '🦆',
  '🐥',
  '🌴',
  '🌱',
  '🍀',
  '🌸',
  '🌹',
  '🍅',
  '🥒',
  '🥕',
  '🥔',
  '🧄',
  '🧅',
  '🌶️',
  '🍎',
  '🍋',
  '🍇',
  '🍌',
  '🍓',
  '🍑',
  '🍒',
  '🥭',
  '🍍',
  '🥥',
  '🥝',
  '🥑',
  '🍆',
  '🍄‍🟫',
  '🥐',
  '🥖',
  '🥨',
  '🧇',
  '🥩',
  '🌭',
  '🥪',
  '🍔',
  '🧀',
  '🍟',
  '🍕',
  '🌮',
  '🥚',
  '🧂',
  '🍿',
  '🍚',
  '🍝',
  '🍣',
  '🍦',
  '🍩',
  '🍪',
  '🎂',
  '🍫',
  '🍭',
  '🍾',
  '🍷',
  '🍺',
  '🍴',
  '🌍',
  '🌙',
  '🌈',
  '🌧️',
  '🌪️',
  '🌊',
  '🎃',
  '🎄',
  '🧨',
  '🎉',
  '🔥',
  '💧',
  '🏄',
  '💥',
  '⚡',
  '☠️',
  '🏖️',
  '🌀',
  '☀️',
  '💔',
  '💘',
  '💕',
  '🖤',
  '👋',
  '👌',
  '💯',
  '👊',
  '🙏',
  '✌',
  '👍',
  '👎',
  '👏',
  '🫶',
  '💪',
  '🦶',
  '🧠',
  '🦷',
  '🦴',
  '👀',
  '👄',
  '🧭',
  '⛰',
  '🌋',
  '🏜',
  '⛺',
  '🏠',
  '🏢',
  '🏥',
  '🏦',
  '🏰',
  '🕌',
  '🚂',
  '🚑',
  '🚔',
  '🚒',
  '🚕',
  '🚚',
  '🏎',
  '🏍',
  '🚲',
  '🛴',
  '🛹',
  '⛽',
  '🚦',
  '🚧',
  '🚢',
  '🛶',
  '🛟',
  '⚓',
  '⛵',
  '✈',
  '🚁',
  '🛰',
  '🛸',
  '🚀',
  '🧳',
  '⏳',
  '⏰',
  '⌚',
  '⭐',
  '☁',
  '☂',
  '❄',
  '☃',
  '🎈',
  '🎁',
  '🏆',
  '🏀',
  '🎳',
  '🥊',
  '🛷',
  '🎯',
  '🔫',
  '🔮',
  '🪄',
  '🎮',
  '🎲',
  '🧸',
  '♟',
  '🖼',
  '🎨',
  '🧵',
  '👖',
  '🩳',
  '🦺',
  '🧦',
  '🎒',
  '👑',
  '🎓',
  '💎',
  '🔔',
  '🎵',
  '🎤',
  '🎧',
  '📻',
  '🎷',
  '🥁',
  '🎹',
  '☎',
  '🔌',
  '🖨',
  '💻',
  '💿',
  '📸',
  '🔍',
  '💡',
  '📚',
  '📜',
  '💵',
  '💳',
  '📮',
  '✏',
  '💼',
  '📎',
  '✂',
  '🔒',
  '🔑',
  '💣',
  '🪚',
  '🔧',
  '⚖',
  '🧲',
  '🧪',
  '💊',
  '🩺',
  '🪑',
  '🧻',
  '🪥',
  '🧯',
  '🚬',
  '⚰',
  '⚠',
  '✅',
  '❌',
  '‼ ',
  '🛒',
  '🛏',
  '🚪',
  '💉',
  '🪝',
  '⛓',
  '⚔',
  '📌',
  '📦',
  '💰',
  '🔦',
  '📺',
  '🎬',
  '⌨ ',
  '🎺',
  '📣',
  '🎰'
]

// Function to get the emoji at a given index
export const getEmoji = (idx: number) => {
  if (idx < 0 || idx >= allEmojis.length) {
    return 'Invalid index'
  }
  return allEmojis[idx]
}