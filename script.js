const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const collectionScreen = document.getElementById("collectionScreen");
const effectLayer = document.getElementById("effectLayer");
const playerNameInput = document.getElementById("playerName");
const startGameBtn = document.getElementById("startGameBtn");
const reviewBtn = document.getElementById("reviewBtn");
const voiceBtn = document.getElementById("voiceBtn");
const musicBtn = document.getElementById("musicBtn");
const musicNameText = document.getElementById("musicNameText");
const homeBtn = document.getElementById("homeBtn");
const levelName = document.getElementById("levelName");
const mapStrip = document.getElementById("mapStrip");
const scoreText = document.getElementById("scoreText");
const comboText = document.getElementById("comboText");
const stickerRoundText = document.getElementById("stickerRoundText");
const progressText = document.getElementById("progressText");
const questionType = document.getElementById("questionType");
const promptArt = document.getElementById("promptArt");
const promptText = document.getElementById("promptText");
const speakBtn = document.getElementById("speakBtn");
const answers = document.getElementById("answers");
const feedbackText = document.getElementById("feedbackText");
const energyFill = document.getElementById("energyFill");
const collectionGrid = document.getElementById("collectionGrid");
const summaryTitle = document.getElementById("summaryTitle");
const summaryText = document.getElementById("summaryText");
const playAgainBtn = document.getElementById("playAgainBtn");
const backHomeBtn = document.getElementById("backHomeBtn");
const dailyTaskText = document.getElementById("dailyTaskText");
const streakText = document.getElementById("streakText");
const stickerText = document.getElementById("stickerText");
const stickerBoard = document.getElementById("stickerBoard");
const todayAnsweredText = document.getElementById("todayAnsweredText");
const reviewCountText = document.getElementById("reviewCountText");
const totalStickerText = document.getElementById("totalStickerText");

const levels = [
  { name: "字灵森林", icon: "🌳", color: "#35b86d", category: "自然" },
  { name: "星空学校", icon: "⭐", color: "#6d5dfc", category: "数字" },
  { name: "海边小镇", icon: "🌊", color: "#24a8db", category: "生活" },
  { name: "运动山谷", icon: "🏃", color: "#ff7a45", category: "动作" },
  { name: "彩虹心园", icon: "🌈", color: "#ec4899", category: "身体" }
];

const hanziBank = [
  { char: "日", pinyin: "ri", meaning: "太阳", icon: "☀", category: "自然", hint: "太阳升起来啦，这个字是？", words: "日出、生日" },
  { char: "月", pinyin: "yue", meaning: "月亮", icon: "🌙", category: "自然", hint: "夜晚弯弯亮亮的朋友是？", words: "月亮、月饼" },
  { char: "水", pinyin: "shui", meaning: "水", icon: "💧", category: "自然", hint: "口渴时要喝什么？", words: "水杯、喝水" },
  { char: "火", pinyin: "huo", meaning: "火", icon: "🔥", category: "自然", hint: "热热亮亮，会燃烧的是？", words: "火山、火苗" },
  { char: "山", pinyin: "shan", meaning: "山", icon: "⛰", category: "自然", hint: "高高的山峰是什么字？", words: "大山、爬山" },
  { char: "木", pinyin: "mu", meaning: "树木", icon: "🌲", category: "自然", hint: "树木的木，选哪个？", words: "木头、树木" },
  { char: "云", pinyin: "yun", meaning: "云", icon: "☁", category: "自然", hint: "天空中软软白白的是？", words: "白云、云朵" },
  { char: "雨", pinyin: "yu", meaning: "雨", icon: "🌧", category: "自然", hint: "天上落下小水滴，是哪个字？", words: "下雨、雨伞" },
  { char: "风", pinyin: "feng", meaning: "风", icon: "🍃", category: "自然", hint: "吹动树叶的是什么？", words: "大风、风车" },
  { char: "花", pinyin: "hua", meaning: "花", icon: "🌸", category: "自然", hint: "香香美美开在枝头的是？", words: "花朵、红花" },
  { char: "一", pinyin: "yi", meaning: "一", icon: "1", category: "数字", hint: "数字 1 对应哪个汉字？", words: "一个、第一" },
  { char: "二", pinyin: "er", meaning: "二", icon: "2", category: "数字", hint: "数字 2 对应哪个汉字？", words: "二月、二个" },
  { char: "三", pinyin: "san", meaning: "三", icon: "3", category: "数字", hint: "数字 3 对应哪个汉字？", words: "三只、三天" },
  { char: "四", pinyin: "si", meaning: "四", icon: "4", category: "数字", hint: "数字 4 对应哪个汉字？", words: "四季、四个" },
  { char: "五", pinyin: "wu", meaning: "五", icon: "5", category: "数字", hint: "数字 5 对应哪个汉字？", words: "五月、五颗" },
  { char: "六", pinyin: "liu", meaning: "六", icon: "6", category: "数字", hint: "数字 6 对应哪个汉字？", words: "六一、六个" },
  { char: "七", pinyin: "qi", meaning: "七", icon: "7", category: "数字", hint: "数字 7 对应哪个汉字？", words: "七天、七色" },
  { char: "八", pinyin: "ba", meaning: "八", icon: "8", category: "数字", hint: "数字 8 对应哪个汉字？", words: "八月、八个" },
  { char: "九", pinyin: "jiu", meaning: "九", icon: "9", category: "数字", hint: "数字 9 对应哪个汉字？", words: "九只、九月" },
  { char: "十", pinyin: "shi", meaning: "十", icon: "10", category: "数字", hint: "数字 10 对应哪个汉字？", words: "十个、十分" },
  { char: "门", pinyin: "men", meaning: "门", icon: "🚪", category: "生活", hint: "进屋要打开什么？", words: "大门、门口" },
  { char: "车", pinyin: "che", meaning: "车", icon: "🚗", category: "生活", hint: "会跑在路上的交通工具是？", words: "汽车、车轮" },
  { char: "书", pinyin: "shu", meaning: "书", icon: "📖", category: "生活", hint: "读故事要看什么？", words: "书本、看书" },
  { char: "饭", pinyin: "fan", meaning: "饭", icon: "🍚", category: "生活", hint: "肚子饿了要吃什么？", words: "米饭、吃饭" },
  { char: "家", pinyin: "jia", meaning: "家", icon: "🏠", category: "生活", hint: "呦呦每天回到温暖的哪里？", words: "回家、大家" },
  { char: "衣", pinyin: "yi", meaning: "衣服", icon: "👕", category: "生活", hint: "穿在身上的是什么？", words: "衣服、上衣" },
  { char: "鞋", pinyin: "xie", meaning: "鞋", icon: "👟", category: "生活", hint: "穿在脚上的是什么？", words: "鞋子、球鞋" },
  { char: "鱼", pinyin: "yu", meaning: "鱼", icon: "🐟", category: "生活", hint: "在水里游来游去的是？", words: "小鱼、金鱼" },
  { char: "鸟", pinyin: "niao", meaning: "鸟", icon: "🐦", category: "生活", hint: "会飞会唱歌的小朋友是？", words: "小鸟、飞鸟" },
  { char: "口", pinyin: "kou", meaning: "嘴巴", icon: "👄", category: "生活", hint: "吃东西、说话都要用什么？", words: "小口、门口" },
  { char: "走", pinyin: "zou", meaning: "走", icon: "🚶", category: "动作", hint: "一步一步向前，是哪个动作？", words: "走路、快走" },
  { char: "跑", pinyin: "pao", meaning: "跑", icon: "🏃", category: "动作", hint: "比走更快的动作是？", words: "跑步、快跑" },
  { char: "跳", pinyin: "tiao", meaning: "跳", icon: "🦘", category: "动作", hint: "双脚离开地面，是哪个字？", words: "跳高、跳舞" },
  { char: "看", pinyin: "kan", meaning: "看", icon: "👀", category: "动作", hint: "用眼睛发现答案，是哪个字？", words: "看见、看书" },
  { char: "听", pinyin: "ting", meaning: "听", icon: "👂", category: "动作", hint: "用耳朵接收声音，是哪个字？", words: "听话、听见" },
  { char: "说", pinyin: "shuo", meaning: "说", icon: "💬", category: "动作", hint: "用嘴巴表达，是哪个字？", words: "说话、小说" },
  { char: "吃", pinyin: "chi", meaning: "吃", icon: "🥣", category: "动作", hint: "把食物送进嘴里，是哪个字？", words: "吃饭、好吃" },
  { char: "喝", pinyin: "he", meaning: "喝", icon: "🥤", category: "动作", hint: "喝水的喝，选哪个？", words: "喝水、喝奶" },
  { char: "拿", pinyin: "na", meaning: "拿", icon: "🤲", category: "动作", hint: "用手把东西取起来，是？", words: "拿走、拿起" },
  { char: "写", pinyin: "xie", meaning: "写", icon: "✏", category: "动作", hint: "用笔写字，是哪个字？", words: "写字、书写" },
  { char: "眼", pinyin: "yan", meaning: "眼睛", icon: "👁", category: "身体", hint: "看东西要用什么？", words: "眼睛、双眼" },
  { char: "耳", pinyin: "er", meaning: "耳朵", icon: "👂", category: "身体", hint: "听声音要用什么？", words: "耳朵、木耳" },
  { char: "鼻", pinyin: "bi", meaning: "鼻子", icon: "👃", category: "身体", hint: "闻香味要用什么？", words: "鼻子、鼻音" },
  { char: "头", pinyin: "tou", meaning: "头", icon: "🙂", category: "身体", hint: "帽子戴在哪里？", words: "头发、点头" },
  { char: "脚", pinyin: "jiao", meaning: "脚", icon: "🦶", category: "身体", hint: "走路要用什么？", words: "小脚、脚步" },
  { char: "牙", pinyin: "ya", meaning: "牙齿", icon: "🦷", category: "身体", hint: "咬苹果要用什么？", words: "牙齿、刷牙" },
  { char: "心", pinyin: "xin", meaning: "心", icon: "❤", category: "身体", hint: "爱心的心，选哪个？", words: "开心、爱心" },
  { char: "手", pinyin: "shou", meaning: "手", icon: "✋", category: "身体", hint: "拍手、拿东西要用什么？", words: "小手、拍手" },
  { char: "脸", pinyin: "lian", meaning: "脸", icon: "😊", category: "身体", hint: "笑起来圆圆的是哪里？", words: "笑脸、脸蛋" },
  { char: "笑", pinyin: "xiao", meaning: "笑", icon: "😄", category: "身体", hint: "开心的时候会怎么样？", words: "笑脸、大笑" }
];

let currentLevel = 0;
let roundIndex = 0;
let score = 0;
let combo = 0;
let mistakes = 0;
let currentQuestion = null;
let roundQuestions = [];
let collected = new Set(JSON.parse(localStorage.getItem("yoyoCollected") || "[]"));
let reviewPool = JSON.parse(localStorage.getItem("yoyoReviewPool") || "[]");
let voiceEnabled = localStorage.getItem("yoyoVoiceEnabled") === "true";
let musicEnabled = localStorage.getItem("yoyoMusicEnabled") !== "false";
let audioContext = null;
let musicTimer = null;
let musicStep = 0;
let currentSongIndex = Number(localStorage.getItem("yoyoSongIndex") || 0);
let currentBgm = null;
let stickers = JSON.parse(localStorage.getItem("yoyoStickers") || "[]");
let dailyStats = JSON.parse(localStorage.getItem("yoyoDailyStats") || "{}");
let roundStickers = 0;
let isReviewMode = false;

const stickerPrizes = ["⭐", "🌸", "🍬", "🎈", "💎", "🏅", "🌟", "🎀", "🍭", "🚀", "🌈", "👑"];

const songs = [
  { name: "字灵出发", file: "audio/bgm/bgm-1.mp3", melody: [523, 659, 784, 1047, 880, 784, 659, 587, 659, 784, 880, 659], bass: [262, 392, 330, 392], chord: [523, 659, 784], speed: 250 },
  { name: "糖果跳跳", file: "audio/bgm/bgm-2.mp3", melody: [659, 784, 988, 1175, 988, 784, 659, 587, 659, 740, 880, 988], bass: [330, 494, 392, 494], chord: [659, 784, 988], speed: 235 },
  { name: "星星小跑", file: "audio/bgm/bgm-3.mp3", melody: [784, 880, 988, 1175, 1319, 1175, 988, 880, 784, 659, 784, 988], bass: [392, 523, 392, 587], chord: [392, 587, 784], speed: 245 },
  { name: "海边泡泡", file: "audio/bgm/bgm-4.mp3", melody: [523, 587, 659, 784, 659, 587, 523, 440, 523, 659, 587, 523], bass: [262, 349, 294, 349], chord: [523, 659, 784], speed: 290 },
  { name: "宝箱派对", file: "audio/bgm/bgm-5.mp3", melody: [587, 740, 880, 988, 1175, 988, 880, 740, 659, 740, 880, 1175], bass: [294, 440, 370, 440], chord: [587, 740, 880], speed: 225 }
];

const voiceFiles = {
  start: ["audio/voice/start-1.mp3", "audio/voice/start-2.mp3"],
  correct: ["audio/voice/correct-1.mp3", "audio/voice/correct-2.mp3", "audio/voice/correct-3.mp3"],
  wrong: ["audio/voice/wrong-1.mp3", "audio/voice/wrong-2.mp3"],
  combo: ["audio/voice/combo-1.mp3", "audio/voice/combo-2.mp3"],
  complete: ["audio/voice/complete-1.mp3", "audio/voice/complete-2.mp3"]
};

function playerName() {
  return playerNameInput.value.trim() || "呦呦";
}

function saveProgress() {
  localStorage.setItem("yoyoCollected", JSON.stringify([...collected]));
  localStorage.setItem("yoyoReviewPool", JSON.stringify(reviewPool.slice(-30)));
  localStorage.setItem("yoyoVoiceEnabled", String(voiceEnabled));
  localStorage.setItem("yoyoMusicEnabled", String(musicEnabled));
  localStorage.setItem("yoyoStickers", JSON.stringify(stickers.slice(-80)));
  localStorage.setItem("yoyoDailyStats", JSON.stringify(dailyStats));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function ensureToday() {
  const key = todayKey();
  if (dailyStats.date === key) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);
  const nextStreak = dailyStats.date === yesterdayKey ? (dailyStats.streak || 0) + 1 : 1;

  dailyStats = {
    date: key,
    answered: 0,
    collected: 0,
    stickers: 0,
    streak: nextStreak
  };
}

function addSticker(reason) {
  const sticker = stickerPrizes[Math.floor(Math.random() * stickerPrizes.length)];
  stickers.push({ sticker, reason, time: Date.now() });
  dailyStats.stickers += 1;
  roundStickers += 1;
  return sticker;
}

function updateHomeDashboard() {
  ensureToday();
  const remaining = Math.max(0, 5 - (dailyStats.collected || 0));
  dailyTaskText.textContent = remaining === 0 ? "任务亮晶晶完成！" : `还差 ${remaining} 个字灵`;
  streakText.textContent = `${dailyStats.streak || 1} 天`;
  stickerText.textContent = `${stickers.length} 枚`;
  saveProgress();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function speak(text) {
  if (!voiceEnabled || !("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.replace(/，/g, "，  ").replace(/。/g, "。  "));
  utterance.lang = "zh-CN";
  utterance.rate = 0.82;
  utterance.pitch = 1.22;
  utterance.volume = 0.95;
  window.speechSynthesis.speak(utterance);
}

function playAudioFile(src, volume = 1) {
  const audio = new Audio(src);
  audio.volume = volume;
  audio.play().catch(() => {});
  return audio;
}

function playVoice(kind, fallbackText) {
  const files = voiceFiles[kind] || [];
  if (files.length) {
    const file = files[Math.floor(Math.random() * files.length)];
    const audio = playAudioFile(file, 1);
    audio.addEventListener("error", () => speak(fallbackText), { once: true });
    return;
  }

  speak(fallbackText);
}

function unlockAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function tone(freq, offset, duration, volume = 0.1, type = "sine") {
  if (!audioContext) return;
  const start = audioContext.currentTime + offset;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function noiseTick(offset, duration, volume = 0.035) {
  if (!audioContext) return;

  const start = audioContext.currentTime + offset;
  const bufferSize = audioContext.sampleRate * duration;
  const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const data = buffer.getChannelData(0);

  for (let index = 0; index < bufferSize; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / bufferSize);
  }

  const noise = audioContext.createBufferSource();
  const gain = audioContext.createGain();
  noise.buffer = buffer;
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
  noise.connect(gain);
  gain.connect(audioContext.destination);
  noise.start(start);
  noise.stop(start + duration);
}

function stopMusic() {
  clearInterval(musicTimer);
  musicTimer = null;
  if (currentBgm) {
    currentBgm.pause();
    currentBgm.currentTime = 0;
    currentBgm = null;
  }
}

function chooseNextSong() {
  const nextIndex = songs.length <= 1 ? 0 : (currentSongIndex + 1 + Math.floor(Math.random() * (songs.length - 1))) % songs.length;
  currentSongIndex = nextIndex;
  localStorage.setItem("yoyoSongIndex", String(currentSongIndex));
  musicStep = 0;
  musicNameText.textContent = `本次音乐：${songs[currentSongIndex].name}`;
}

function startMusic() {
  if (!musicEnabled || musicTimer) return;

  unlockAudio();
  const song = songs[currentSongIndex];
  currentBgm = new Audio(song.file);
  currentBgm.loop = true;
  currentBgm.volume = 0.72;
  currentBgm.play().catch(() => {
    currentBgm = null;
  });

  if (currentBgm) {
    currentBgm.addEventListener("playing", () => {
      clearInterval(musicTimer);
      musicTimer = null;
    }, { once: true });
  }

  musicTimer = setInterval(() => {
    const note = song.melody[musicStep % song.melody.length];
    const bass = song.bass[musicStep % song.bass.length];
    const chordNote = song.chord[musicStep % song.chord.length];
    tone(note, 0, 0.16, 0.082, "triangle");
    tone(note * 2, 0.01, 0.08, 0.018, "sine");
    tone(bass, 0, 0.2, 0.044, "sine");

    if (musicStep % 2 === 0) {
      tone(chordNote, 0.04, 0.18, 0.028, "triangle");
      noiseTick(0.02, 0.035, 0.026);
    }

    if (musicStep % 4 === 3) {
      tone(note * 1.5, 0.08, 0.1, 0.026, "sine");
    }

    musicStep += 1;
  }, song.speed);
}

function playSound(type) {
  unlockAudio();
  if (type === "tap") {
    tone(880, 0, 0.035, 0.07, "square");
    tone(1320, 0.025, 0.035, 0.035, "sine");
  }
  if (type === "correct") {
    tone(660, 0, 0.08, 0.13, "triangle");
    tone(880, 0.08, 0.1, 0.13, "triangle");
    tone(1175, 0.18, 0.18, 0.14, "triangle");
    tone(1568, 0.24, 0.12, 0.1, "sine");
    noiseTick(0.18, 0.09, 0.05);
  }
  if (type === "excellent") {
    tone(784, 0, 0.09, 0.14, "triangle");
    tone(988, 0.08, 0.09, 0.14, "triangle");
    tone(1319, 0.18, 0.16, 0.15, "triangle");
    tone(1760, 0.32, 0.18, 0.12, "sine");
    noiseTick(0.12, 0.09, 0.055);
    noiseTick(0.3, 0.12, 0.07);
  }
  if (type === "monster") {
    tone(150, 0, 0.12, 0.12, "sawtooth");
    tone(120, 0.1, 0.16, 0.11, "sawtooth");
    tone(95, 0.24, 0.22, 0.1, "sawtooth");
    noiseTick(0.05, 0.12, 0.04);
  }
  if (type === "wrong") {
    tone(220, 0, 0.12, 0.08, "sine");
    tone(196, 0.11, 0.16, 0.055, "sine");
  }
  if (type === "level") {
    tone(523, 0, 0.12, 0.12, "triangle");
    tone(659, 0.13, 0.12, 0.12, "triangle");
    tone(784, 0.26, 0.12, 0.12, "triangle");
    tone(1047, 0.42, 0.32, 0.13, "triangle");
    tone(1319, 0.5, 0.22, 0.08, "sine");
    noiseTick(0.1, 0.16, 0.055);
    noiseTick(0.42, 0.18, 0.065);
  }
  if (type === "click") {
    tone(360, 0, 0.06, 0.05, "sine");
  }
  if (type === "combo") {
    tone(784, 0, 0.08, 0.11, "triangle");
    tone(988, 0.08, 0.08, 0.11, "triangle");
    tone(1319, 0.16, 0.2, 0.12, "triangle");
    noiseTick(0.08, 0.12, 0.06);
  }
}

function clearEffectNode(node, delay = 1000) {
  window.setTimeout(() => node.remove(), delay);
}

function centerOfElement(element) {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
}

function burstAt(element, kind = "correct") {
  const center = centerOfElement(element);
  const pieces = kind === "level"
    ? ["⭐", "🌟", "🎀", "🍬", "💎", "🎈", "Excellent!", "✨"]
    : ["⭐", "🌟", "✨", "🎀", "Excellent!", "💫"];

  pieces.forEach((piece, index) => {
    const node = document.createElement("div");
    const angle = (Math.PI * 2 * index) / pieces.length;
    const distance = kind === "level" ? 160 + Math.random() * 120 : 80 + Math.random() * 80;
    node.className = "burst-piece";
    node.textContent = piece;
    node.style.left = `${center.x - 15}px`;
    node.style.top = `${center.y - 15}px`;
    node.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    node.style.setProperty("--dy", `${Math.sin(angle) * distance - 70}px`);
    node.style.setProperty("--rot", `${Math.random() * 220 - 110}deg`);
    effectLayer.appendChild(node);
    clearEffectNode(node, 900);
  });
}

function monsterAt(element) {
  const center = centerOfElement(element);
  const node = document.createElement("div");
  node.className = "monster-pop";
  node.textContent = "嘿";
  node.style.left = `${center.x - 43}px`;
  node.style.top = `${center.y - 108}px`;
  effectLayer.appendChild(node);
  clearEffectNode(node, 1000);
}

function renderMap() {
  mapStrip.innerHTML = levels.map((level, index) => `
    <button class="map-node ${index === currentLevel ? "is-active" : ""}" style="background:${level.color}" type="button" data-level="${index}">
      ${level.name}
      <span>${level.icon}</span>
    </button>
  `).join("");

  mapStrip.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      currentLevel = Number(button.dataset.level);
      startLevel();
    });
  });
}

function buildQuestions() {
  if (isReviewMode) {
    const reviewItems = reviewPool
      .map((char) => hanziBank.find((item) => item.char === char))
      .filter(Boolean);

    return shuffle(reviewItems.length ? reviewItems : hanziBank.slice(0, 10)).slice(0, 10);
  }

  const category = levels[currentLevel].category;
  const base = hanziBank.filter((item) => item.category === category);
  const reviewItems = reviewPool
    .map((char) => hanziBank.find((item) => item.char === char))
    .filter(Boolean);

  return shuffle([...reviewItems.slice(0, 3), ...base]).slice(0, 10);
}

function makeQuestion(item) {
  const modes = ["看图选字", "听音选字", "拼音选字", "找相同字"];
  const mode = modes[Math.floor(Math.random() * modes.length)];
  const distractors = shuffle(hanziBank.filter((other) => other.char !== item.char)).slice(0, 3);
  return {
    item,
    mode,
    options: shuffle([item, ...distractors])
  };
}

function showQuestion() {
  if (roundIndex >= roundQuestions.length) {
    finishLevel();
    return;
  }

  currentQuestion = makeQuestion(roundQuestions[roundIndex]);
  const { item, mode } = currentQuestion;

  questionType.textContent = mode;
  progressText.textContent = `${roundIndex + 1} / ${roundQuestions.length}`;
  scoreText.textContent = `星星 ${score}`;
  comboText.textContent = `连击 ${combo}`;
  stickerRoundText.textContent = `贴纸 ${roundStickers}`;
  energyFill.style.width = `${(roundIndex / roundQuestions.length) * 100}%`;

  if (mode === "看图选字") {
    promptArt.textContent = item.icon;
    promptText.textContent = item.hint;
  }

  if (mode === "听音选字") {
    promptArt.textContent = "🔊";
    promptText.textContent = `小耳朵竖起来，${playerName()}要找哪个字灵？`;
    setTimeout(() => speak(`${playerName()}，听好啦：${item.meaning}`), 220);
  }

  if (mode === "拼音选字") {
    promptArt.textContent = item.pinyin;
    promptText.textContent = `拼音小星星是 ${item.pinyin}，它在叫哪个字？`;
  }

  if (mode === "找相同字") {
    promptArt.textContent = item.char;
    promptText.textContent = `大字灵站出来啦，快找到它的小伙伴。`;
  }

  answers.innerHTML = currentQuestion.options.map((option) => `
    <button class="answer-btn" type="button" data-char="${option.char}" aria-label="选择 ${option.char}">
      ${option.char}
    </button>
  `).join("");

  answers.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => checkAnswer(button));
  });
}

function checkAnswer(button) {
  playSound("tap");
  const chosen = button.dataset.char;
  const correct = currentQuestion.item.char;
  const item = currentQuestion.item;

  if (chosen === correct) {
    button.classList.add("correct");
    score += 1;
    combo += 1;
    dailyStats.answered += 1;
    collected.add(correct);
    dailyStats.collected += 1;
    reviewPool = reviewPool.filter((char) => char !== correct);
    feedbackText.textContent = `Excellent！「${correct}」字灵跳进${playerName()}的小背包！`;
    playSound("correct");
    playSound("excellent");
    burstAt(button);

    if (combo >= 5) {
      const sticker = addSticker("五连击");
      feedbackText.textContent = `哇！${playerName()}五连闪光！贴纸 ${sticker} 飞来啦！`;
      playSound("combo");
      playVoice("combo", `${playerName()}进入闪光模式，连续答对 ${combo} 个！`);
    } else if (combo >= 3) {
      playVoice("combo", `${playerName()}三连击，太棒啦！`);
    } else {
      playVoice("correct", `Excellent！${playerName()}答对啦！${item.char}，${item.words}`);
    }

    saveProgress();
    setTimeout(() => {
      roundIndex += 1;
      showQuestion();
    }, 900);
  } else {
    button.classList.add("wrong");
    combo = 0;
    mistakes += 1;
    dailyStats.answered += 1;
    if (!reviewPool.includes(correct)) {
      reviewPool.push(correct);
    }

    const wrongButtons = [...answers.querySelectorAll("button")].filter((answer) => answer.dataset.char !== correct);
    if (mistakes % 2 === 0 && wrongButtons.length > 1) {
      wrongButtons[0].disabled = true;
      wrongButtons[0].style.opacity = "0.35";
      feedbackText.textContent = `小怪兽眨眼捣乱！别急，帮${playerName()}吹走一个迷雾选项。`;
      playSound("monster");
      monsterAt(button);
      playVoice("wrong", `小怪兽捣乱啦，${playerName()}再看一看。`);
    } else {
      feedbackText.textContent = `小怪兽嘿嘿笑了一下，${playerName()}再点一次试试。`;
      playSound("monster");
      monsterAt(button);
      playVoice("wrong", `嘿嘿，差一点点，${playerName()}再试一次。`);
    }

    comboText.textContent = `连击 ${combo}`;
    playSound("wrong");
    saveProgress();
  }
}

function finishLevel() {
  gameScreen.classList.add("hidden");
  collectionScreen.classList.remove("hidden");
  energyFill.style.width = "100%";
  const stars = Math.max(1, Math.min(3, 3 - Math.floor(mistakes / 3)));
  if (stars === 3) {
    addSticker("三星通关");
  }
  if ((dailyStats.collected || 0) >= 5) {
    addSticker("每日任务");
  }
  summaryTitle.textContent = `宝箱砰地打开！${playerName()}拿到 ${stars} 颗星`;
  summaryText.textContent = `这一趟抓到 ${score} 个字灵，贴纸飞来 ${roundStickers} 枚，图鉴亮起 ${collected.size} 个小伙伴。`;
  renderCollection();
  renderReport();
  updateHomeDashboard();
  saveProgress();
  playSound("level");
  burstAt(summaryTitle, "level");
  playVoice("complete", `恭喜${playerName()}，通关啦！字灵岛为${playerName()}放烟花啦！`);
}

function renderReport() {
  todayAnsweredText.textContent = dailyStats.answered || 0;
  reviewCountText.textContent = reviewPool.length;
  totalStickerText.textContent = stickers.length;
  stickerBoard.innerHTML = stickers.slice(-24).reverse().map((item, index) => `
    <div class="sticker ${index === 0 ? "new" : ""}" aria-label="${item.reason}">
      ${item.sticker}
    </div>
  `).join("");
}

function renderCollection() {
  collectionGrid.innerHTML = hanziBank.map((item) => {
    const unlocked = collected.has(item.char);
    return `
      <div class="collection-card ${unlocked ? "" : "locked"}" aria-label="${unlocked ? item.char : "未解锁"}">
        ${unlocked ? item.char : "?"}
      </div>
    `;
  }).join("");
}

function startLevel() {
  ensureToday();
  stopMusic();
  chooseNextSong();
  roundIndex = 0;
  score = 0;
  combo = 0;
  mistakes = 0;
  roundStickers = 0;
  roundQuestions = buildQuestions();
  levelName.textContent = isReviewMode ? "调皮字回收岛" : levels[currentLevel].name;
  homeScreen.classList.add("hidden");
  collectionScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderMap();
  feedbackText.textContent = isReviewMode ? `${playerName()}小勇士，去把调皮字灵请回来！` : `${playerName()}小勇士，新的小岛亮起来啦！`;
  playSound("click");
  startMusic();
  playVoice("start", isReviewMode ? `${playerName()}小勇士，欢迎来到调皮字回收岛。我们把字灵找回来！` : `${playerName()}小勇士，欢迎来到${levels[currentLevel].name}，我们出发啦！`);
  window.scrollTo({ top: 0, behavior: "smooth" });
  showQuestion();
}

function showHome() {
  gameScreen.classList.add("hidden");
  collectionScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  updateHomeDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startGameBtn.addEventListener("click", () => {
  isReviewMode = false;
  startLevel();
});

reviewBtn.addEventListener("click", () => {
  isReviewMode = true;
  startLevel();
});

homeBtn.addEventListener("click", showHome);
backHomeBtn.addEventListener("click", showHome);

playAgainBtn.addEventListener("click", () => {
  isReviewMode = false;
  currentLevel = (currentLevel + 1) % levels.length;
  startLevel();
});

voiceBtn.addEventListener("click", () => {
  voiceEnabled = !voiceEnabled;
  voiceBtn.textContent = voiceEnabled ? "语音包：开" : "语音包：关";
  saveProgress();
  playSound("click");
  if (voiceEnabled) {
    speak(`${playerName()}，语音包醒来啦。`);
  }
});

musicBtn.addEventListener("click", () => {
  musicEnabled = !musicEnabled;
  musicBtn.textContent = musicEnabled ? "音乐：开" : "音乐：关";
  musicNameText.textContent = `本次音乐：${songs[currentSongIndex].name}`;
  saveProgress();
  playSound("click");

  if (musicEnabled) {
    startMusic();
  } else {
    stopMusic();
  }
});

speakBtn.addEventListener("click", () => {
  playSound("click");
  if (currentQuestion) {
    speak(`${playerName()}，听听这个字灵：${currentQuestion.item.meaning}。${currentQuestion.item.words}`);
  }
});

playerNameInput.addEventListener("change", saveProgress);

function init() {
  ensureToday();
  playerNameInput.value = localStorage.getItem("yoyoPlayerName") || "呦呦";
  playerNameInput.addEventListener("input", () => {
    localStorage.setItem("yoyoPlayerName", playerName());
  });
  voiceBtn.textContent = voiceEnabled ? "语音包：开" : "语音包：关";
  musicBtn.textContent = musicEnabled ? "音乐：开" : "音乐：关";
  renderMap();
  renderCollection();
  renderReport();
  updateHomeDashboard();
}

init();
