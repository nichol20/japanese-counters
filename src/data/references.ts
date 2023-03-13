import { Level, LevelReference } from '@/types/stages'
import { nichiIcons } from './icons'
import { LevelReferenceNumbers } from './numbers'

export const maiLevelReferences: LevelReference[][] = [
  [
    {
      number: LevelReferenceNumbers[1],
      reading: {
        hiragana: 'いちまい',
        kanji: '一枚'
      },
      wrongAnswers: ['ひとまい', 'いっまい']
    },
    {
      number: LevelReferenceNumbers[2],
      reading: {
        hiragana: 'にまい',
        kanji: '二枚'
      },
      wrongAnswers: ['ふたまい']
    },
    {
      number: LevelReferenceNumbers[3],
      reading: {
        hiragana: 'さんまい',
        kanji: '三枚'
      },
      wrongAnswers: ['みまい', 'みつまい']
    },
    {
      number: LevelReferenceNumbers[4],
      reading: {
        hiragana: 'よんまい',
        kanji: '四枚'
      },
      wrongAnswers: ['しまい', 'よまい']
    },
    {
      number: LevelReferenceNumbers[5],
      reading: {
        hiragana: 'ごまい',
        kanji: '五枚'
      },
      wrongAnswers: []
    }
  ],
  [
    {
      number: LevelReferenceNumbers[6],
      reading: {
        hiragana: 'ろくまい',
        kanji: '六枚'
      },
      wrongAnswers: ['しっまい', 'じゅっまい', 'やまい', 'はっまい', 'ろっまい', 'くまい']
    },
    {
      number: LevelReferenceNumbers[7],
      reading: {
        hiragana: 'しちまい',
        kanji: '七舞'
      },
      wrongAnswers: ['しっまい', 'じゅっまい', 'やまい', 'はっまい', 'ろっまい', 'くまい']
    },
    {
      number: LevelReferenceNumbers[8],
      reading: {
        hiragana: 'はちまい',
        kanji: '八枚'
      },
      wrongAnswers: ['しっまい', 'じゅっまい', 'やまい', 'はっまい', 'ろっまい', 'くまい']
    },
    {
      number: LevelReferenceNumbers[9],
      reading: {
        hiragana: 'きゅうまい',
        kanji: '九枚'
      },
      wrongAnswers: ['しっまい', 'じゅっまい', 'やまい', 'はっまい', 'ろっまい', 'くまい']
    },
    {
      number: LevelReferenceNumbers[10],
      reading: {
        hiragana: 'じゅうまい',
        kanji: '十枚'
      },
      wrongAnswers: ['しっまい', 'じゅっまい', 'やまい', 'はっまい', 'ろっまい', 'くまい']
    }
  ]
]

export const honLevelReferences: LevelReference[][] = [
  [
    {
      number: LevelReferenceNumbers[1],
      reading: {
        hiragana: 'いっぽん',
        kanji: '一本'
      },
      wrongAnswers: [ 'いちほん', 'いちぼん', 'いちぽん', 'いっほん', 'いっぼん', 'ひとほん', 'ひとぼん', 'ひとぽん' ]
    },
    {
      number: LevelReferenceNumbers[2],
      reading: {
        hiragana: 'にほん',
        kanji: '二本'
      },
      wrongAnswers: [ 'にぼん', 'にぽん', 'ふたほん', 'ふたぼん', 'ふたぽん' ]
    },
    {
      number: LevelReferenceNumbers[3],
      reading: {
        hiragana: 'さんぼん',
        kanji: '三本'
      },
      wrongAnswers: [ 'さんぼん', 'さんぽん', 'みっほん', 'みっぼん', 'みっぽん', 'みつほん', 'みつぼん', 'みつぽん' ]
    },
    {
      number: LevelReferenceNumbers[4],
      reading: {
        hiragana: 'よんほん',
        kanji: '四本'
      },
      wrongAnswers: ['しほん', 'しぼん', 'しぽん', 'よほん', 'よぼん', 'よぽん', 'よんぼん', 'よんぽん']
    },
    {
      number: LevelReferenceNumbers[5],
      reading: {
        hiragana: 'ごほん',
        kanji: '五本'
      },
      wrongAnswers: [ 'ごぼん', 'ごぽん' ]
    }
  ],
  [
    {
      number: LevelReferenceNumbers[6],
      reading: {
        hiragana: 'ろっぽん',
        kanji: '六本'
      },
      wrongAnswers: [ 'ろくほん', 'ろくぼん', 'ろくぽん', 'ろっほん', 'ろっぼん' ]
    },
    {
      number: LevelReferenceNumbers[7],
      reading: {
        hiragana: 'ななほん',
        kanji: '七本'
      },
      wrongAnswers: [ 'しちほん', 'しちぼん', 'しちぽん', 'しっほん', 'しっぼん', 'しっぽん', 'ななぼん', 'ななぽん' ]
    },
    {
      number: LevelReferenceNumbers[8],
      reading: {
        hiragana: 'はっぽん',
        kanji: '八本'
      },
      wrongAnswers: ['はちほん', 'はちぼん', 'はちぽん', 'はっほん', 'はっぼん', 'やほん', 'やぼん', 'やぽん']
    },
    {
      number: LevelReferenceNumbers[9],
      reading: {
        hiragana: 'きゅうほん',
        kanji: '九本'
      },
      wrongAnswers: [ 'きゅうぼん', 'きゅうぽん', 'くほん', 'くぼん', 'くぽん' ]
    },
    {
      number: LevelReferenceNumbers[10],
      reading: {
        hiragana: 'じゅっぽん',
        kanji: '十本'
      },
      wrongAnswers: [ 'じゅうほん', 'じゅうぼん', 'じゅうぽん', 'じゅっほん', 'じゅっぼん' ]
    }
  ]
]

export const hikiLevelReferences: LevelReference[][] = [
  [
    {
      number: LevelReferenceNumbers[1],
      reading: {
        hiragana: 'いっぴき',
        kanji: '一匹'
      },
      wrongAnswers: [ 'いちひき', 'いちびき', 'いちぴき', 'いっひき', 'いっびき', 'ひとひき', 'ひとびき', 'ひとぴき' ]
    },
    {
      number: LevelReferenceNumbers[2],
      reading: {
        hiragana: 'にひき',
        kanji: '二匹'
      },
      wrongAnswers: [ 'にびき', 'にぴき', 'ふたひき', 'ふたびき', 'ふたぴき' ]
    },
    {
      number: LevelReferenceNumbers[3],
      reading: {
        hiragana: 'さんびき',
        kanji: '三匹'
      },
      wrongAnswers: [ 'さんひき', 'さんぴき', 'みっひき', 'みっびき', 'みっぴき', 'みつひき', 'みつびき', 'みつぴき' ]
    },
    {
      number: LevelReferenceNumbers[4],
      reading: {
        hiragana: 'よんひき',
        kanji: '四匹'
      },
      wrongAnswers: [ 'しひき', 'しびき', 'しぴき', 'よひき', 'よびき', 'よぴき', 'よんびき', 'よんぴき' ]
    },
    {
      number: LevelReferenceNumbers[5],
      reading: {
        hiragana: 'ごひき',
        kanji: '五匹'
      },
      wrongAnswers: [ 'ごびき', 'ごぴき' ]
    }
  ],
  [
    {
      number: LevelReferenceNumbers[6],
      reading: {
        hiragana: 'ろっぴき',
        kanji: '六匹'
      },
      wrongAnswers: [ 'ろくひき', 'ろくびき', 'ろくぴき', 'ろっひき', 'ろっびき' ]
    },
    {
      number: LevelReferenceNumbers[7],
      reading: {
        hiragana: 'ななひき',
        kanji: '七匹'
      },
      wrongAnswers: [ 'しちひき', 'しちびき', 'しちぴき', 'しっひき', 'しっびき', 'しっぴき', 'ななびき', 'ななぴき' ]
    },
    {
      number: LevelReferenceNumbers[8],
      reading: {
        hiragana: 'はっぴき',
        kanji: '八匹'
      },
      wrongAnswers: ['はちひき', 'はちびき', 'はちぴき', 'はっひき', 'はっびき', 'やひき', 'やびき', 'やぴき']
    },
    {
      number: LevelReferenceNumbers[9],
      reading: {
        hiragana: 'きゅうひき',
        kanji: '九匹'
      },
      wrongAnswers: [ 'きゅうびき', 'きゅうぴき', 'くひき', 'くびき', 'くぴき' ]
    },
    {
      number: LevelReferenceNumbers[10],
      reading: {
        hiragana: 'じゅっぴき',
        kanji: '十匹'
      },
      wrongAnswers: [ 'じゅうひき', 'じゅうびき', 'じゅうぴき', 'じゅっひき', 'じゅっびき' ]
    }
  ]
]

export const daiLevelReferences: LevelReference[][] = [
  [
    {
      number: LevelReferenceNumbers[1],
      reading: {
        hiragana: 'いちだい',
        kanji: '一台'
      },
      wrongAnswers: [ 'いっだい', 'ひとだい' ]
    },
    {
      number: LevelReferenceNumbers[2],
      reading: {
        hiragana: 'にだい',
        kanji: '二台'
      },
      wrongAnswers: [ 'ふただい' ]
    },
    {
      number: LevelReferenceNumbers[3],
      reading: {
        hiragana: 'さんだい',
        kanji: '三台'
      },
      wrongAnswers: [ 'みっだい', 'みつだい' ]
    },
    {
      number: LevelReferenceNumbers[4],
      reading: {
        hiragana: 'よんだい',
        kanji: '四台'
      },
      wrongAnswers: [ 'しだい', 'よだい' ]
    },
    {
      number: LevelReferenceNumbers[5],
      reading: {
        hiragana: 'ごだい',
        kanji: '五台'
      },
      wrongAnswers: []
    }
  ],
  [
    {
      number: LevelReferenceNumbers[6],
      reading: {
        hiragana: 'ろくだい',
        kanji: '六台'
      },
      wrongAnswers: [ 'ろっだい' ]
    },
    {
      number: LevelReferenceNumbers[7],
      reading: {
        hiragana: 'ななだい',
        kanji: '七台'
      },
      wrongAnswers: [ 'しちだい', 'しっだい' ]
    },
    {
      number: LevelReferenceNumbers[8],
      reading: {
        hiragana: 'はちだい',
        kanji: '八台'
      },
      wrongAnswers: [ 'はっだい', 'やだい']
    },
    {
      number: LevelReferenceNumbers[9],
      reading: {
        hiragana: 'きゅうだい',
        kanji: '九台'
      },
      wrongAnswers: [ 'くだい' ]
    },
    {
      number: LevelReferenceNumbers[10],
      reading: {
        hiragana: 'じゅうだい',
        kanji: '十台'
      },
      wrongAnswers: [ 'じゅっだい' ]
    }
  ]
]

export const tsuLevelReferences: LevelReference[][] = [
  [
    {
      number: LevelReferenceNumbers[1],
      reading: {
        hiragana: 'ひとつ',
        kanji: '一つ'
      },
      wrongAnswers: []
    },
    {
      number: LevelReferenceNumbers[2],
      reading: {
        hiragana: 'ふたつ',
        kanji: '二つ'
      },
      wrongAnswers: []
    },
    {
      number: LevelReferenceNumbers[3],
      reading: {
        hiragana: 'みっつ',
        kanji: '三つ'
      },
      wrongAnswers: []
    },
    {
      number: LevelReferenceNumbers[4],
      reading: {
        hiragana: 'よっつ',
        kanji: '四つ'
      },
      wrongAnswers: []
    },
    {
      number: LevelReferenceNumbers[5],
      reading: {
        hiragana: 'いつつ',
        kanji: '五つ'
      },
      wrongAnswers: []
    }
  ],
  [
    {
      number: LevelReferenceNumbers[6],
      reading: {
        hiragana: 'むっつ',
        kanji: '六つ'
      },
      wrongAnswers: []
    },
    {
      number: LevelReferenceNumbers[7],
      reading: {
        hiragana: 'ななつ',
        kanji: '七つ'
      },
      wrongAnswers: []
    },
    {
      number: LevelReferenceNumbers[8],
      reading: {
        hiragana: 'やっつ',
        kanji: '八つ'
      },
      wrongAnswers: []
    },
    {
      number: LevelReferenceNumbers[9],
      reading: {
        hiragana: 'ここのつ',
        kanji: '九つ'
      },
      wrongAnswers: []
    },
    {
      number: LevelReferenceNumbers[10],
      reading: {
        hiragana: 'とお',
        kanji: '十'
      },
      wrongAnswers: []
    }
  ]
]

export const nichiLevelReferences: LevelReference[][] = [
  [
    {
      number: {
        ...LevelReferenceNumbers[1],
        icons: 1
      },
      reading: {
        hiragana: 'ついたち',
        kanji: '一日'
      },
      specificIcons: [ nichiIcons[0] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[2],
        icons: 1
      },
      reading: {
        hiragana: 'ふつか',
        kanji: '二日'
      },
      specificIcons: [ nichiIcons[1] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[3],
        icons: 1
      },
      reading: {
        hiragana: 'みっか',
        kanji: '三日'
      },
      specificIcons: [ nichiIcons[2] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[4],
        icons: 1
      },
      reading: {
        hiragana: 'よっか',
        kanji: '四日'
      },
      specificIcons: [ nichiIcons[3] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[5],
        icons: 1
      },
      reading: {
        hiragana: 'いつか',
        kanji: '五日'
      },
      specificIcons: [ nichiIcons[4] ],
      wrongAnswers: []
    }
  ],
  [
    {
      number: {
        ...LevelReferenceNumbers[6],
        icons: 1
      },
      reading: {
        hiragana: 'むいか',
        kanji: '六日'
      },
      specificIcons: [ nichiIcons[5] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[7],
        icons: 1
      },
      reading: {
        hiragana: 'なのか',
        kanji: '七日'
      },
      specificIcons: [ nichiIcons[6] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[8],
        icons: 1
      },
      reading: {
        hiragana: 'ようか',
        kanji: '八日'
      },
      specificIcons: [ nichiIcons[7] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[9],
        icons: 1
      },
      reading: {
        hiragana: 'ここのか',
        kanji: '九日'
      },
      specificIcons: [ nichiIcons[8] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[10],
        icons: 1
      },
      reading: {
        hiragana: 'とおか',
        kanji: '十日'
      },
      specificIcons: [ nichiIcons[9] ],
      wrongAnswers: []
    },
  ],
  [
    {
      number: {
        ...LevelReferenceNumbers[11],
        icons: 1
      },
      reading: {
        hiragana: 'じゅういちにち',
        kanji: '十一日'
      },
      specificIcons: [ nichiIcons[10] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[12],
        icons: 1
      },
      reading: {
        hiragana: 'じゅうににち',
        kanji: '十二日'
      },
      specificIcons: [ nichiIcons[11] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[13],
        icons: 1
      },
      reading: {
        hiragana: 'じゅうさんにち',
        kanji: '十三日'
      },
      specificIcons: [ nichiIcons[12] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[14],
        icons: 1
      },
      reading: {
        hiragana: 'じゅうよっか',
        kanji: '十四日'
      },
      specificIcons: [ nichiIcons[13] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[15],
        icons: 1
      },
      reading: {
        hiragana: 'じゅうごにち',
        kanji: '十五日'
      },
      specificIcons: [ nichiIcons[14] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[16],
        icons: 1
      },
      reading: {
        hiragana: 'じゅうろくにち',
        kanji: '十六日'
      },
      specificIcons: [ nichiIcons[15] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[17],
        icons: 1
      },
      reading: {
        hiragana: 'じゅうしちにち',
        kanji: '十七日'
      },
      specificIcons: [ nichiIcons[16] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[18],
        icons: 1
      },
      reading: {
        hiragana: 'じゅうはちにち',
        kanji: '十八日'
      },
      specificIcons: [ nichiIcons[17] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[19],
        icons: 1
      },
      reading: {
        hiragana: 'じゅうくにち',
        kanji: '十九日'
      },
      specificIcons: [ nichiIcons[18] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[20],
        icons: 1
      },
      reading: {
        hiragana: 'はつか',
        kanji: '二十日'
      },
      specificIcons: [ nichiIcons[19] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[21],
        icons: 1
      },
      reading: {
        hiragana: 'にじゅういちにち',
        kanji: '二十一日'
      },
      specificIcons: [ nichiIcons[20] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[22],
        icons: 1
      },
      reading: {
        hiragana: 'にじゅうににち',
        kanji: '二十二日'
      },
      specificIcons: [ nichiIcons[21] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[23],
        icons: 1
      },
      reading: {
        hiragana: 'にじゅうさんにち',
        kanji: '二十三日'
      },
      specificIcons: [ nichiIcons[22] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[24],
        icons: 1
      },
      reading: {
        hiragana: 'にじゅうよっか',
        kanji: '二十四日'
      },
      specificIcons: [ nichiIcons[23] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[25],
        icons: 1
      },
      reading: {
        hiragana: 'にじゅうごにち',
        kanji: '二十五日'
      },
      specificIcons: [ nichiIcons[24] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[26],
        icons: 1
      },
      reading: {
        hiragana: 'にじゅうろくにち',
        kanji: '二十六日'
      },
      specificIcons: [ nichiIcons[25] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[27],
        icons: 1
      },
      reading: {
        hiragana: 'にじゅうしちにち',
        kanji: '二十七日'
      },
      specificIcons: [ nichiIcons[26] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[28],
        icons: 1
      },
      reading: {
        hiragana: 'にじゅうはちにち',
        kanji: '二十八日'
      },
      specificIcons: [ nichiIcons[27] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[29],
        icons: 1
      },
      reading: {
        hiragana: 'にじゅうくにち',
        kanji: '二十九日'
      },
      specificIcons: [ nichiIcons[28] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[30],
        icons: 1
      },
      reading: {
        hiragana: 'さんじゅうにち',
        kanji: '三十日'
      },
      specificIcons: [ nichiIcons[29] ],
      wrongAnswers: []
    },
    {
      number: {
        ...LevelReferenceNumbers[31],
        icons: 1
      },
      reading: {
        hiragana: 'さんじゅういちにち',
        kanji: '三十一日'
      },
      specificIcons: [ nichiIcons[30] ],
      wrongAnswers: []
    },
  ]
]

export const chakuLevelReferences: LevelReference[][] = [
  [
    {
      number: LevelReferenceNumbers[1],
      reading: {
        hiragana: 'いっちゃく',
        kanji: '一着'
      },
      wrongAnswers: [ 'いちちゃく', 'ひとちゃく' ]
    },
    {
      number: LevelReferenceNumbers[2],
      reading: {
        hiragana: 'にちゃく',
        kanji: '二着'
      },
      wrongAnswers: [ 'ふたちゃく' ]
    },
    {
      number: LevelReferenceNumbers[3],
      reading: {
        hiragana: 'さんちゃく',
        kanji: '三着'
      },
      wrongAnswers: ['みっちゃく', 'みつちゃく']
    },
    {
      number: LevelReferenceNumbers[4],
      reading: {
        hiragana: 'よんちゃく',
        kanji: '四着'
      },
      wrongAnswers: [ 'しちゃく', 'よちゃく' ]
    },
    {
      number: LevelReferenceNumbers[5],
      reading: {
        hiragana: 'ごちゃく',
        kanji: '五着'
      },
      wrongAnswers: []
    }
  ],
  [
    {
      number: LevelReferenceNumbers[6],
      reading: {
        hiragana: 'ろくちゃく',
        kanji: '六着'
      },
      wrongAnswers: [ 'ろっちゃく' ]
    },
    {
      number: LevelReferenceNumbers[7],
      reading: {
        hiragana: 'ななちゃく',
        kanji: '七着'
      },
      wrongAnswers: [ 'しちちゃく', 'しっちゃく' ]
    },
    {
      number: LevelReferenceNumbers[8],
      reading: {
        hiragana: 'はっちゃく',
        kanji: '八着'
      },
      wrongAnswers: [ 'はちちゃく', 'やちゃく']
    },
    {
      number: LevelReferenceNumbers[9],
      reading: {
        hiragana: 'きゅうちゃく',
        kanji: '九着'
      },
      wrongAnswers: [ 'くちゃく' ]
    },
    {
      number: LevelReferenceNumbers[10],
      reading: {
        hiragana: 'じっちゃく',
        kanji: '十着'
      },
      wrongAnswers: [ 'じゅっちゃく', 'じゅうちゃく' ]
    }
  ]
]

export const touLevelReferences: LevelReference[][] = [
  [
    {
      number: LevelReferenceNumbers[1],
      reading: {
        hiragana: 'いっとう',
        kanji: '一頭'
      },
      wrongAnswers: [ 'いちとう', 'ひととう' ]
    },
    {
      number: LevelReferenceNumbers[2],
      reading: {
        hiragana: 'にとう',
        kanji: '二頭'
      },
      wrongAnswers: [ 'ふたとう' ]
    },
    {
      number: LevelReferenceNumbers[3],
      reading: {
        hiragana: 'さんとう',
        kanji: '三頭'
      },
      wrongAnswers: ['みっとう', 'みつとう']
    },
    {
      number: LevelReferenceNumbers[4],
      reading: {
        hiragana: 'よんとう',
        kanji: '四頭'
      },
      wrongAnswers: [ 'しとう', 'よとう' ]
    },
    {
      number: LevelReferenceNumbers[5],
      reading: {
        hiragana: 'ごとう',
        kanji: '五頭'
      },
      wrongAnswers: []
    }
  ],
  [
    {
      number: LevelReferenceNumbers[6],
      reading: {
        hiragana: 'ろくとう',
        kanji: '六頭'
      },
      wrongAnswers: [ 'ろっとう' ]
    },
    {
      number: LevelReferenceNumbers[7],
      reading: {
        hiragana: 'ななとう',
        kanji: '七頭'
      },
      wrongAnswers: [ 'しちとう', 'しっとう' ]
    },
    {
      number: LevelReferenceNumbers[8],
      reading: {
        hiragana: 'はっとう',
        kanji: '八頭'
      },
      wrongAnswers: [ 'はちとう', 'やとう']
    },
    {
      number: LevelReferenceNumbers[9],
      reading: {
        hiragana: 'きゅうとう',
        kanji: '九頭'
      },
      wrongAnswers: [ 'くとう' ]
    },
    {
      number: LevelReferenceNumbers[10],
      reading: {
        hiragana: 'じっとう',
        kanji: '十頭'
      },
      wrongAnswers: [ 'じゅっとう', 'じゅうとう' ]
    }
  ]
]

export const ninLevelReferences: LevelReference[][] = [
  [
    {
      number: LevelReferenceNumbers[1],
      reading: {
        hiragana: 'ひとり',
        kanji: '一人'
      },
      wrongAnswers: [ 'いっにん', 'いちにん', 'ひとにん' ]
    },
    {
      number: LevelReferenceNumbers[2],
      reading: {
        hiragana: 'ふたり',
        kanji: '二人'
      },
      wrongAnswers: [ 'ににん', 'ふたにん' ]
    },
    {
      number: LevelReferenceNumbers[3],
      reading: {
        hiragana: 'さんにん',
        kanji: '三人'
      },
      wrongAnswers: ['みっにん', 'みつにん']
    },
    {
      number: LevelReferenceNumbers[4],
      reading: {
        hiragana: 'よにん',
        kanji: '四人'
      },
      wrongAnswers: [ 'しにん', 'よんにん' ]
    },
    {
      number: LevelReferenceNumbers[5],
      reading: {
        hiragana: 'ごにん',
        kanji: '五人'
      },
      wrongAnswers: []
    }
  ],
  [
    {
      number: LevelReferenceNumbers[6],
      reading: {
        hiragana: 'ろくにん',
        kanji: '六人'
      },
      wrongAnswers: [ 'ろっにん' ]
    },
    {
      number: LevelReferenceNumbers[7],
      reading: {
        hiragana: 'しちにん',  // ななにん
        kanji: '七人'
      },
      wrongAnswers: [ 'しっにん' ]
    },
    {
      number: LevelReferenceNumbers[8],
      reading: {
        hiragana: 'はちにん',
        kanji: '八人'
      },
      wrongAnswers: [ 'はっにん', 'やにん']
    },
    {
      number: LevelReferenceNumbers[9],
      reading: {
        hiragana: 'きゅうにん',
        kanji: '九人'
      },
      wrongAnswers: [ 'くにん' ]
    },
    {
      number: LevelReferenceNumbers[10],
      reading: {
        hiragana: 'じゅうにん',
        kanji: '十人'
      },
      wrongAnswers: [ 'じゅっにん' ]
    }
  ]
]

export const haiLevelReferences: LevelReference[][] = [
  [
    {
      number: LevelReferenceNumbers[1],
      reading: {
        hiragana: 'いっぱい',
        kanji: '一杯'
      },
      wrongAnswers: [ 'いちはい', 'いちばい', 'いちぱい', 'いっはい', 'いっばい', 'ひとはい', 'ひとばい', 'ひとぱい' ]
    },
    {
      number: LevelReferenceNumbers[2],
      reading: {
        hiragana: 'にはい',
        kanji: '二杯'
      },
      wrongAnswers: [ 'にばい', 'にぱい', 'ふたはい', 'ふたばい', 'ふたぱい' ]
    },
    {
      number: LevelReferenceNumbers[3],
      reading: {
        hiragana: 'さんばい',
        kanji: '三杯'
      },
      wrongAnswers: [ 'さんはい', 'さんぱい', 'みっはい', 'みっばい', 'みっぱい', 'みつはい', 'みつばい', 'みつぱい' ]
    },
    {
      number: LevelReferenceNumbers[4],
      reading: {
        hiragana: 'よんはい',
        kanji: '四杯'
      },
      wrongAnswers: [ 'しはい', 'しばい', 'しぱい', 'よはい', 'よばい', 'よぱい', 'よんばい', 'よんぱい' ]
    },
    {
      number: LevelReferenceNumbers[5],
      reading: {
        hiragana: 'ごはい',
        kanji: '五杯'
      },
      wrongAnswers: [ 'ごばい', 'ごぱい' ]
    }
  ],
  [
    {
      number: LevelReferenceNumbers[6],
      reading: {
        hiragana: 'ろっぱい',
        kanji: '六杯'
      },
      wrongAnswers: [ 'ろくはい', 'ろくばい', 'ろくぱい', 'ろっはい', 'ろっばい' ]
    },
    {
      number: LevelReferenceNumbers[7],
      reading: {
        hiragana: 'ななはい',
        kanji: '七杯'
      },
      wrongAnswers: [ 'しちはい', 'しちばい', 'しちぱい', 'しっはい', 'しっばい', 'しっぱい', 'ななばい', 'ななぱい' ]
    },
    {
      number: LevelReferenceNumbers[8],
      reading: {
        hiragana: 'はっぱい',
        kanji: '八杯'
      },
      wrongAnswers: ['はちはい', 'はちばい', 'はちぱい', 'はっはい', 'はっばい', 'やはい', 'やばい', 'やぱい']
    },
    {
      number: LevelReferenceNumbers[9],
      reading: {
        hiragana: 'きゅうはい',
        kanji: '九杯'
      },
      wrongAnswers: [ 'きゅうばい', 'きゅうぱい', 'くはい', 'くばい', 'くぱい' ]
    },
    {
      number: LevelReferenceNumbers[10],
      reading: {
        hiragana: 'じゅっぱい',
        kanji: '十杯'
      },
      wrongAnswers: [ 'じゅうはい', 'じゅうばい', 'じゅうぱい', 'じゅっはい', 'じゅっばい' ]
    }
  ]
]