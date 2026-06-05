import type { LangCode } from "./translations";

type T14 = Record<LangCode, string>;

// ────────────────────────────────────────────────
// SAFETY VIEW
// ────────────────────────────────────────────────
export const SAFETY_GUIDE_TITLE: T14 = {
  ko:"생활 안전 가이드", en:"Safety Guide", zh:"生活安全指南", vi:"Hướng dẫn an toàn",
  mn:"Аюулгүй байдлын гарын авлага", id:"Panduan Keselamatan", ms:"Panduan Keselamatan",
  ru:"Руководство по безопасности", uz:"Xavfsizlik qo'llanmasi", th:"คู่มือความปลอดภัย",
  fil:"Safety Guide", si:"ආරක්ෂිත මාර්ගෝපදේශය", km:"មគ្គុទ្ទេសក៍សុវត្ថិភាព", ne:"सुरक्षा मार्गदर्शन",
};
export const FIRE_GUIDE: T14 = {
  ko:"🔥 화재 행동요령", en:"🔥 Fire Emergency Guide", zh:"🔥 火灾应对指南", vi:"🔥 Hướng dẫn xử lý hỏa hoạn",
  mn:"🔥 Галын үед яах вэ", id:"🔥 Panduan Kebakaran", ms:"🔥 Panduan Kebakaran",
  ru:"🔥 Инструкция при пожаре", uz:"🔥 Yong'inda harakat qilish", th:"🔥 คู่มือเพลิงไหม้",
  fil:"🔥 Fire Emergency Guide", si:"🔥 ගිනි ගැනීම් මාර්ගෝපදේශය", km:"🔥 មគ្គុទ្ទេសក៍អគ្គីភ័យ", ne:"🔥 आगो दुर्घटना मार्गदर्शन",
};
export const QUAKE_GUIDE: T14 = {
  ko:"🌍 지진 행동요령", en:"🌍 Earthquake Guide", zh:"🌍 地震应对指南", vi:"🌍 Hướng dẫn động đất",
  mn:"🌍 Газар хөдлөлтийн үед", id:"🌍 Panduan Gempa Bumi", ms:"🌍 Panduan Gempa Bumi",
  ru:"🌍 Инструкция при землетрясении", uz:"🌍 Zilzila paytida harakat", th:"🌍 คู่มือแผ่นดินไหว",
  fil:"🌍 Earthquake Guide", si:"🌍 භූ කම්පන මාර්ගෝපදේශය", km:"🌍 មគ្គុទ្ទេសក៍ទឹកដីញ័រ", ne:"🌍 भूकम्प मार्गदर्शन",
};
export const SITE_LANG_NOTE: T14 = {
  ko:"사이트 우측 상단 언어 버튼 클릭 → 원하는 언어 선택",
  en:"Click language button at top right → select your language",
  zh:"点击右上角语言按钮 → 选择您的语言",
  vi:"Nhấn nút ngôn ngữ phía trên bên phải → chọn ngôn ngữ",
  mn:"Баруун дээд буланд байгаа хэлийн товчийг дарна уу",
  id:"Klik tombol bahasa di kanan atas → pilih bahasa Anda",
  ms:"Klik butang bahasa di kanan atas → pilih bahasa anda",
  ru:"Нажмите кнопку языка вверху справа → выберите язык",
  uz:"O'ng yuqori burchakdagi til tugmasini bosing",
  th:"คลิกปุ่มภาษาขวาบน → เลือกภาษาของคุณ",
  fil:"I-click ang button ng wika sa kanang itaas → pumili ng wika",
  si:"ඉහළ දකුණේ භාෂා බොත්තම ක්ලික් කරන්න → භාෂාව තෝරන්න",
  km:"ចុចប៊ូតុងភាសានៅជ្រុងស្តាំខាងលើ → ជ្រើសរើសភាសារបស់អ្នក",
  ne:"माथिल्लो दायाँमा भाषा बटन थिच्नुस् → आफ्नो भाषा छान्नुस्",
};

// ────────────────────────────────────────────────
// MEDICAL VIEW
// ────────────────────────────────────────────────
export const SHOW_DOCTOR: T14 = {
  ko:"의사에게 보여주세요 →", en:"Show this to the doctor →", zh:"请展示给医生看 →", vi:"Cho bác sĩ xem →",
  mn:"Эмчид үзүүлнэ үү →", id:"Tunjukkan ke dokter →", ms:"Tunjukkan kepada doktor →",
  ru:"Покажите врачу →", uz:"Shifokorga ko'rsating →", th:"แสดงให้แพทย์ดู →",
  fil:"Ipakita sa doktor →", si:"වෛද්‍යවරයාට පෙන්වන්න →", km:"បង្ហាញដល់វេជ្ជបណ្ឌិត →", ne:"डाक्टरलाई देखाउनुस् →",
};
export const FOREIGN_PATIENT_CENTER: T14 = {
  ko:"외국인환자 지원센터", en:"Foreign Patient Support Center", zh:"外国患者支持中心", vi:"Trung tâm hỗ trợ bệnh nhân nước ngoài",
  mn:"Гадаадын өвчтөний дэмжлэгийн төв", id:"Pusat Dukungan Pasien Asing", ms:"Pusat Sokongan Pesakit Asing",
  ru:"Центр поддержки иностранных пациентов", uz:"Xorijiy bemorlar qo'llab-quvvatlash markazi", th:"ศูนย์สนับสนุนผู้ป่วยต่างชาติ",
  fil:"Foreign Patient Support Center", si:"විදේශ රෝගී සහාය මධ්‍යස්ථානය", km:"មជ្ឈមណ្ឌលគាំទ្រអ្នកជំងឺបរទេស", ne:"विदेशी बिरामी सहायता केन्द्र",
};
export const ANSAN_SUPPORT: T14 = {
  ko:"안산시외국인주민상담지원센터", en:"Ansan Foreign Residents Support", zh:"安山外国居民支援中心", vi:"Trung tâm hỗ trợ cư dân nước ngoài Ansan",
  mn:"Ансан хотын гадаадын иргэдийн зөвлөх төв", id:"Pusat Dukungan Warga Asing Ansan", ms:"Pusat Sokongan Warga Asing Ansan",
  ru:"Центр поддержки иностранцев Ансана", uz:"Ansan chet el fuqarolari qo'llab-quvvatlash", th:"ศูนย์สนับสนุนผู้อยู่อาศัยต่างชาติอันซัน",
  fil:"Ansan Foreign Residents Support", si:"Ansan විදේශ පදිංචිකරුවන් සහාය", km:"មជ្ឈមណ្ឌលគាំទ្រជនបរទេស អានសាន", ne:"अन्सान विदेशी बासिन्दा सहायता",
};
export const SYMPTOMS: { ko: string; native: Partial<Record<LangCode, string>> }[] = [
  { ko:"머리가 아파요", native:{ en:"I have a headache", zh:"我头痛", vi:"Tôi bị đau đầu", mn:"Толгой өвдөж байна", id:"Saya sakit kepala", ms:"Saya sakit kepala", ru:"У меня болит голова", uz:"Boshim og'riyapti", th:"ฉันปวดหัว", fil:"Masakit ang ulo ko", si:"මට හිසෙහි කැකුළු ඇත", km:"ខ្ញុំឈឺក្បាល", ne:"मलाई टाउको दुख्छ" }},
  { ko:"열이 나요", native:{ en:"I have a fever", zh:"我发烧了", vi:"Tôi bị sốt", mn:"Халуурч байна", id:"Saya demam", ms:"Saya demam", ru:"У меня жар", uz:"Haroratim ko'tarildi", th:"ฉันเป็นไข้", fil:"May lagnat ako", si:"මට උෂ්ණත්වය ඇත", km:"ខ្ញុំក្ដៅ", ne:"मलाई ज्वरो छ" }},
  { ko:"배가 아파요", native:{ en:"I have a stomachache", zh:"我肚子痛", vi:"Tôi đau bụng", mn:"Гэдэс өвдөж байна", id:"Saya sakit perut", ms:"Saya sakit perut", ru:"У меня болит живот", uz:"Qornim og'riyapti", th:"ฉันปวดท้อง", fil:"Masakit ang tiyan ko", si:"මගේ බඩ රිදෙනවා", km:"ខ្ញុំឈឺពោះ", ne:"मलाई पेट दुख्छ" }},
  { ko:"숨쉬기가 힘들어요", native:{ en:"I have difficulty breathing", zh:"我呼吸困难", vi:"Tôi khó thở", mn:"Амьсгал хүнд байна", id:"Saya sulit bernapas", ms:"Saya sukar bernafas", ru:"Мне трудно дышать", uz:"Nafas olishim qiyin", th:"ฉันหายใจลำบาก", fil:"Nahihirapan akong huminga", si:"මට හුස්ම ගැනීමට අපහසුය", km:"ខ្ញុំពិបាកដកដង្ហើម", ne:"मलाई सास फेर्न गाह्रो छ" }},
  { ko:"가슴이 아파요", native:{ en:"I have chest pain", zh:"我胸口痛", vi:"Tôi đau ngực", mn:"Цээж өвдөж байна", id:"Dada saya sakit", ms:"Dada saya sakit", ru:"У меня боль в груди", uz:"Ko'kragim og'riyapti", th:"ฉันเจ็บหน้าอก", fil:"Masakit ang dibdib ko", si:"මගේ පපුව රිදෙනවා", km:"ខ្ញុំឈឺទ្រូង", ne:"मलाई छाती दुख्छ" }},
  { ko:"다쳤어요", native:{ en:"I am injured", zh:"我受伤了", vi:"Tôi bị thương", mn:"Гэмтсэн байна", id:"Saya terluka", ms:"Saya cedera", ru:"Я получил травму", uz:"Men yaralandim", th:"ฉันบาดเจ็บ", fil:"Nasugatan ako", si:"මට තුවාල ලැබී ඇත", km:"ខ្ញុំរបួស", ne:"मलाई चोट लागेको छ" }},
  { ko:"어지러워요", native:{ en:"I feel dizzy", zh:"我头晕", vi:"Tôi bị chóng mặt", mn:"Толгой эргэж байна", id:"Saya pusing", ms:"Saya pening", ru:"У меня кружится голова", uz:"Boshim aylanmoqda", th:"ฉันรู้สึกเวียนหัว", fil:"Nahihilo ako", si:"මට කරකැවිල්ල දැනෙනවා", km:"ខ្ញុំឈឺក្បាលវិល", ne:"मलाई टाउको घुम्छ" }},
  { ko:"구역질이 나요", native:{ en:"I feel nauseous", zh:"我恶心想吐", vi:"Tôi buồn nôn", mn:"Дотор муухай байна", id:"Saya mual", ms:"Saya loya", ru:"Меня тошнит", uz:"Ko'nglim ayniyapti", th:"ฉันคลื่นไส้", fil:"Naduduwal ako", si:"මට ඔක්කාරය දැනෙනවා", km:"ខ្ញុំចង្អោរ", ne:"मलाई वाकवाकी लाग्छ" }},
  { ko:"약이 필요해요", native:{ en:"I need medicine", zh:"我需要药", vi:"Tôi cần thuốc", mn:"Эм хэрэгтэй байна", id:"Saya butuh obat", ms:"Saya perlukan ubat", ru:"Мне нужно лекарство", uz:"Menga dori kerak", th:"ฉันต้องการยา", fil:"Kailangan ko ng gamot", si:"මට බෙහෙත් අවශ්‍යයි", km:"ខ្ញុំត្រូវការថ្នាំ", ne:"मलाई औषधि चाहिन्छ" }},
  { ko:"임신했어요", native:{ en:"I am pregnant", zh:"我怀孕了", vi:"Tôi có thai", mn:"Жирэмсэн байна", id:"Saya hamil", ms:"Saya mengandung", ru:"Я беременна", uz:"Men homiladorman", th:"ฉันตั้งครรภ์", fil:"Buntis ako", si:"මම ගැබ් ගත්තා", km:"ខ្ញុំមានផ្ទៃពោះ", ne:"म गर्भवती छु" }},
];
export const HIRA_LABEL: T14 = {
  ko:"건강보험심사평가원 병원 찾기", en:"HIRA Hospital Search", zh:"健康保险审查评价院医院搜索", vi:"Tìm kiếm bệnh viện HIRA",
  mn:"HIRA эмнэлэг хайх", id:"Pencarian Rumah Sakit HIRA", ms:"Carian Hospital HIRA",
  ru:"Поиск больниц HIRA", uz:"HIRA kasalxona qidirish", th:"ค้นหาโรงพยาบาล HIRA",
  fil:"HIRA Hospital Search", si:"HIRA රෝහල් සෙවීම", km:"ស្វែងរកមន្ទីរពេទ្យ HIRA", ne:"HIRA अस्पताल खोज",
};
export const EGEN_LABEL: T14 = {
  ko:"응급실 위치 찾기 (e-gen)", en:"Emergency Room Finder (e-gen)", zh:"急诊室位置查找", vi:"Tìm phòng cấp cứu",
  mn:"Яаралтай тусламжийн өрөө олох", id:"Pencari UGD (e-gen)", ms:"Pencari Bilik Kecemasan",
  ru:"Найти скорую помощь", uz:"Shoshilinch yordam topish", th:"ค้นหาห้องฉุกเฉิน",
  fil:"Emergency Room Finder", si:"හදිසි කාමර සෙවීම", km:"ស្វែងរកបន្ទប់សង្គ្រោះបន្ទាន់", ne:"आपतकालीन कक्ष खोज",
};
export const HIRA_CALL: T14 = {
  ko:"건강보험심사평가원 콜센터", en:"HIRA Call Center", zh:"健康保险审查评价院呼叫中心", vi:"Trung tâm cuộc gọi HIRA",
  mn:"HIRA дуудлагын төв", id:"Pusat Panggilan HIRA", ms:"Pusat Panggilan HIRA",
  ru:"Колл-центр HIRA", uz:"HIRA qo'ng'iroq markazi", th:"ศูนย์โทรศัพท์ HIRA",
  fil:"HIRA Call Center", si:"HIRA ඇමතුම් මධ්‍යස්ථානය", km:"មជ្ឈមណ្ឌលទូរស័ព្ទ HIRA", ne:"HIRA कल सेन्टर",
};
export const NHIS_LABEL: T14 = {
  ko:"건강보험 가입 안내 (국민건강보험공단)", en:"Health Insurance Guide (NHIS)", zh:"健康保险加入指南", vi:"Hướng dẫn tham gia bảo hiểm y tế",
  mn:"Эрүүл мэндийн даатгалд элсэх заавар", id:"Panduan Asuransi Kesehatan (NHIS)", ms:"Panduan Insurans Kesihatan",
  ru:"Руководство по медицинскому страхованию", uz:"Sog'liqni saqlash sug'urtasi", th:"คู่มือประกันสุขภาพ",
  fil:"Health Insurance Guide (NHIS)", si:"සෞඛ්‍ය රක්ෂණ මාර්ගෝපදේශය", km:"មគ្គុទ្ទេសក៍ធានារ៉ាប់រងសុខភាព", ne:"स्वास्थ्य बीमा मार्गदर्शन",
};

// ────────────────────────────────────────────────
// LABOR VIEW
// ────────────────────────────────────────────────
export const LABOR_UI: Record<string, T14> = {
  minWageBanner: {
    ko:"2026 최저시급", en:"2026 Min. Wage", zh:"2026年最低时薪", vi:"Lương tối thiểu 2026",
    mn:"2026 оны хамгийн бага цалин", id:"Upah Minimum 2026", ms:"Gaji Minimum 2026",
    ru:"Мин. зарплата 2026", uz:"2026 yil eng kam ish haqi", th:"ค่าแรงขั้นต่ำ 2026",
    fil:"Min. Wage 2026", si:"2026 අවම වැටුප", km:"ប្រាក់ឈ្នួលអប្បបរមា 2026", ne:"2026 न्यूनतम ज्याला",
  },
  hourlyToMonthly: {
    ko:"시급 → 월급", en:"Hourly → Monthly", zh:"时薪 → 月薪", vi:"Theo giờ → Tháng",
    mn:"Цагийн → Сарын", id:"Per Jam → Bulanan", ms:"Setiap Jam → Bulanan",
    ru:"Почасовой → Месячный", uz:"Soatlik → Oylik", th:"รายชั่วโมง → รายเดือน",
    fil:"Bawat Oras → Buwanan", si:"ශ්‍රම → මාසික", km:"ប្រចាំម៉ោង → ប្រចាំខែ", ne:"प्रति घण्टा → मासिक",
  },
  monthlyInput: {
    ko:"월급 입력", en:"Enter Monthly", zh:"输入月薪", vi:"Nhập lương tháng",
    mn:"Сарын цалин оруулах", id:"Masukkan Gaji Bulanan", ms:"Masukkan Gaji Bulanan",
    ru:"Ввести месячную", uz:"Oylik ish haqi kiriting", th:"ใส่เงินเดือน",
    fil:"Ilagay ang Buwanan", si:"මාසික ඇතුළත් කරන්න", km:"បញ្ចូលប្រាក់ខែ", ne:"मासिक तलब लेख्नुस्",
  },
  hourlyWageLabel: {
    ko:"시급 (원)", en:"Hourly Wage (₩)", zh:"时薪（韩元）", vi:"Lương theo giờ (₩)",
    mn:"Цагийн цалин (₩)", id:"Upah Per Jam (₩)", ms:"Gaji Per Jam (₩)",
    ru:"Почасовая ставка (₩)", uz:"Soatlik ish haqi (₩)", th:"ค่าจ้างรายชั่วโมง (₩)",
    fil:"Sahod bawat Oras (₩)", si:"පැය වැටුප (₩)", km:"ប្រាក់ឈ្នួលប្រចាំម៉ោង (₩)", ne:"प्रति घण्टा ज्याला (₩)",
  },
  monthlyWageLabel: {
    ko:"월급 (원)", en:"Monthly Wage (₩)", zh:"月薪（韩元）", vi:"Lương tháng (₩)",
    mn:"Сарын цалин (₩)", id:"Gaji Bulanan (₩)", ms:"Gaji Bulanan (₩)",
    ru:"Месячная зарплата (₩)", uz:"Oylik maosh (₩)", th:"เงินเดือน (₩)",
    fil:"Buwanang Sahod (₩)", si:"මාසික වැටුප (₩)", km:"ប្រាក់ខែ (₩)", ne:"मासिक तलब (₩)",
  },
  hoursPerDay: {
    ko:"일일 근무시간", en:"Hours/day", zh:"每日工作时间", vi:"Giờ làm/ngày",
    mn:"Өдрийн ажлын цаг", id:"Jam kerja/hari", ms:"Jam kerja/hari",
    ru:"Часов в день", uz:"Kunlik ish soati", th:"ชั่วโมง/วัน",
    fil:"Oras/araw", si:"පැය/දිනය", km:"ម៉ោង/ថ្ងៃ", ne:"घण्टा/दिन",
  },
  daysPerWeek: {
    ko:"일주 근무일수", en:"Days/week", zh:"每周工作天数", vi:"Ngày làm/tuần",
    mn:"7 хоногт ажлын өдөр", id:"Hari kerja/minggu", ms:"Hari kerja/minggu",
    ru:"Дней в неделю", uz:"Haftalik ish kunlari", th:"วัน/สัปดาห์",
    fil:"Araw/linggo", si:"දින/සතිය", km:"ថ្ងៃ/សប្តាហ៍", ne:"दिन/हप्ता",
  },
  overtimeHours: {
    ko:"월 연장근무 시간", en:"Monthly overtime hours", zh:"月加班时间", vi:"Giờ làm thêm/tháng",
    mn:"Сарын илүү цагийн ажил", id:"Jam lembur bulanan", ms:"Jam lebih masa bulanan",
    ru:"Сверхурочные в месяц", uz:"Oylik qo'shimcha ish soati", th:"ชั่วโมงล่วงเวลา/เดือน",
    fil:"Overtime oras/buwan", si:"මාසික අතිකාල", km:"ម៉ោងបន្ថែម/ខែ", ne:"मासिक ओभरटाइम",
  },
  weeklyHoliday: {
    ko:"주휴수당", en:"Weekly Holiday Pay", zh:"周休津贴", vi:"Phụ cấp nghỉ tuần",
    mn:"7 хоногийн амралтын мөнгө", id:"Tunjangan Hari Libur Mingguan", ms:"Elaun Cuti Mingguan",
    ru:"Еженедельная надбавка", uz:"Haftalik dam olish to'lovi", th:"เบี้ยเลี้ยงวันหยุดสัปดาห์",
    fil:"Weekly Holiday Pay", si:"සතිපති නිවාඩු දීමනාව", km:"ប្រាក់ឈ្នួលថ្ងៃឈប់សម្រាក", ne:"साप्ताहिक बिदा भत्ता",
  },
  included: {
    ko:"포함", en:"Included", zh:"包含", vi:"Bao gồm", mn:"Оруулсан", id:"Termasuk", ms:"Termasuk",
    ru:"Включено", uz:"Kiritilgan", th:"รวม", fil:"Kasama", si:"ඇතුළත්", km:"រួមមាន", ne:"समावेश",
  },
  excluded: {
    ko:"미포함", en:"Excluded", zh:"不包含", vi:"Không bao gồm", mn:"Оруулаагүй", id:"Tidak termasuk", ms:"Tidak termasuk",
    ru:"Не включено", uz:"Kiritilmagan", th:"ไม่รวม", fil:"Hindi kasama", si:"ඇතුළත් නොකෙළේ", km:"មិនរួមមាន", ne:"समावेश छैन",
  },
  tax: {
    ko:"세금", en:"Tax", zh:"税金", vi:"Thuế", mn:"Татвар", id:"Pajak", ms:"Cukai",
    ru:"Налог", uz:"Soliq", th:"ภาษี", fil:"Buwis", si:"බදු", km:"ពន្ធ", ne:"कर",
  },
  noTax: {
    ko:"미적용", en:"Not applied", zh:"不适用", vi:"Không áp dụng", mn:"Хамаарахгүй", id:"Tidak diterapkan", ms:"Tidak dikenakan",
    ru:"Не применяется", uz:"Qo'llanilmaydi", th:"ไม่ใช้", fil:"Hindi naaangkop", si:"අදාළ නොවේ", km:"មិនអនុវត្ត", ne:"लागू छैन",
  },
  trainee: {
    ko:"수습 (3개월 이내)", en:"Trainee (within 3 months)", zh:"试用期（3个月内）", vi:"Thực tập (trong 3 tháng)",
    mn:"Туршилтын хугацаа (3 сар)", id:"Masa percobaan (3 bulan)", ms:"Pelatihan (dalam 3 bulan)",
    ru:"Стажировка (до 3 месяцев)", uz:"Sinov muddati (3 oy)", th:"ฝึกงาน (ภายใน 3 เดือน)",
    fil:"Trainee (loob ng 3 buwan)", si:"පුහුණු (මාස 3 ඇතුළත)", km:"ហ្វឹកហ្វឺន (ក្នុងរយៈ 3 ខែ)", ne:"प्रशिक्षु (३ महिनाभित्र)",
  },
  applied: {
    ko:"적용 (최저임금 90%)", en:"Applied (90% of min wage)", zh:"适用（最低工资的90%）", vi:"Áp dụng (90% lương tối thiểu)",
    mn:"Хамаарна (хамгийн бага 90%)", id:"Diterapkan (90% upah min)", ms:"Dikenakan (90% gaji min)",
    ru:"Применяется (90% мин.)", uz:"Qo'llaniladi (90% min.)", th:"ใช้ (90% ค่าแรงขั้นต่ำ)",
    fil:"Inilapat (90% ng min wage)", si:"අදාළ (90% අවම)", km:"អនុវត្ត (90% ។ of min)", ne:"लागू (न्यूनतम 90%)",
  },
  calculate: {
    ko:"계산하기", en:"Calculate", zh:"计算", vi:"Tính toán", mn:"Тооцоолох", id:"Hitung", ms:"Kira",
    ru:"Рассчитать", uz:"Hisoblash", th:"คำนวณ", fil:"Kalkulahin", si:"ගණනය කරන්න", km:"គណនា", ne:"गणना गर्नुस्",
  },
  reset: {
    ko:"초기화", en:"Reset", zh:"重置", vi:"Đặt lại", mn:"Дахин тохируулах", id:"Reset", ms:"Tetapkan semula",
    ru:"Сброс", uz:"Qayta o'rnatish", th:"รีเซ็ต", fil:"I-reset", si:"නැවත සකසන්න", km:"កំណត់ឡើងវិញ", ne:"रिसेट",
  },
  estimatedMonthly: {
    ko:"예상 월 수령액", en:"Estimated Monthly Pay", zh:"预计月薪", vi:"Lương tháng ước tính",
    mn:"Тооцоолсон сарын цалин", id:"Gaji Bulanan Perkiraan", ms:"Gaji Bulanan Anggaran",
    ru:"Ожидаемая месячная", uz:"Taxminiy oylik maosh", th:"เงินเดือนโดยประมาณ",
    fil:"Tinatantiyang Buwanang Sahod", si:"ගණිත මාසික ගෙවීම", km:"ប្រាក់ខែប្រហាក់ប្រហែល", ne:"अनुमानित मासिक तलब",
  },
  base: {
    ko:"기본급", en:"Base", zh:"基本工资", vi:"Lương cơ bản", mn:"Үндсэн цалин", id:"Gaji pokok", ms:"Gaji asas",
    ru:"Базовая", uz:"Asosiy maosh", th:"เงินเดือนฐาน", fil:"Base", si:"මූලික", km:"មូលដ្ឋាន", ne:"आधार",
  },
  overtime: {
    ko:"연장근무수당 (×1.5)", en:"Overtime (×1.5)", zh:"加班费 (×1.5)", vi:"Phụ cấp làm thêm (×1.5)",
    mn:"Илүү цагийн мөнгө (×1.5)", id:"Lembur (×1.5)", ms:"Lebih masa (×1.5)",
    ru:"Сверхурочные (×1.5)", uz:"Qo'shimcha ish (×1.5)", th:"โอที (×1.5)",
    fil:"Overtime (×1.5)", si:"අතිකාල (×1.5)", km:"ម៉ោងបន្ថែម (×1.5)", ne:"ओभरटाइम (×1.5)",
  },
  gross: {
    ko:"세전 합계", en:"Gross", zh:"税前合计", vi:"Tổng trước thuế", mn:"Татвар хасахаас өмнө",
    id:"Total sebelum pajak", ms:"Jumlah sebelum cukai", ru:"До вычета налогов",
    uz:"Soliqdan oldin", th:"รวมก่อนหักภาษี", fil:"Gross", si:"බදු ගෙවීමට පෙර", km:"សរុបមុនពន្ធ", ne:"कर कट्टा गर्नु अघि",
  },
  taxInsurance: {
    ko:"세금/보험료", en:"Tax/Insurance", zh:"税金/保险费", vi:"Thuế/Bảo hiểm",
    mn:"Татвар/Даатгал", id:"Pajak/Asuransi", ms:"Cukai/Insurans",
    ru:"Налог/Страховка", uz:"Soliq/Sug'urta", th:"ภาษี/ประกัน",
    fil:"Buwis/Insurance", si:"බදු/රක්ෂණය", km:"ពន្ធ/ធានារ៉ាប់រង", ne:"कर/बीमा",
  },
  belowMin: {
    ko:"최저임금 미달!", en:"Below minimum wage!", zh:"低于最低工资！", vi:"Dưới mức lương tối thiểu!",
    mn:"Хамгийн бага цалингаас бага!", id:"Di bawah upah minimum!", ms:"Di bawah gaji minimum!",
    ru:"Ниже минимальной зарплаты!", uz:"Minimal ish haqidan past!", th:"ต่ำกว่าค่าแรงขั้นต่ำ!",
    fil:"Mas mababa sa minimum wage!", si:"අවම වැටුපට වඩා අඩු!", km:"ក្រោមប្រាក់ឈ្នួលអប្បបរមា!", ne:"न्यूनतम ज्यालाभन्दा कम!",
  },
  wageTheftCall: {
    ko:"고용노동부 콜센터 (임금체불 신고)", en:"Ministry of Employment Hotline (Wage Theft)", zh:"雇用劳动部热线（欠薪举报）",
    vi:"Đường dây nóng Bộ Lao động", mn:"Хөдөлмөрийн яамны утас", id:"Hotline Kementerian Tenaga Kerja",
    ms:"Talian Panas Kementerian Buruh", ru:"Горячая линия Министерства труда", uz:"Mehnat vazirligi qo'ng'iroq markazi",
    th:"สายด่วนกระทรวงแรงงาน", fil:"Hotline ng Ministri ng Paggawa", si:"රැකියා අමාත්‍යාංශ ක්‍ෂණ ලිපිනය",
    km:"ខ្សែទូរស័ព្ទក្រសួងការងារ", ne:"रोजगार मन्त्रालय हटलाइन",
  },
  ansanLaborOffice: {
    ko:"안산고용노동지청", en:"Ansan Labor Office", zh:"安山雇用劳动支厅", vi:"Văn phòng lao động Ansan",
    mn:"Ансан хотын хөдөлмөрийн газар", id:"Kantor Ketenagakerjaan Ansan", ms:"Pejabat Buruh Ansan",
    ru:"Ансанское управление труда", uz:"Ansan mehnat boshqarmasi", th:"สำนักงานแรงงาน Ansan",
    fil:"Ansan Labor Office", si:"Ansan කම්කරු කාර්යාලය", km:"事务所ការងារ អានសាន", ne:"अन्सान श्रम कार्यालय",
  },
  moel: {
    ko:"고용노동부 외국인 노동자 안내", en:"Ministry of Employment - Foreign Workers", zh:"雇用劳动部外国劳工指南",
    vi:"Hướng dẫn công nhân nước ngoài - Bộ Lao động", mn:"Гадаадын ажилчдын гарын авлага",
    id:"Panduan Pekerja Asing - Kementerian", ms:"Panduan Pekerja Asing - Kementerian",
    ru:"Руководство для иностранных работников", uz:"Xorijiy ishchilar uchun qo'llanma",
    th:"คู่มือแรงงานต่างชาติ - กระทรวงแรงงาน", fil:"Gabay para sa Foreign Workers",
    si:"විදේශ කම්කරුවන් සඳහා මාර්ගෝපදේශය", km:"មគ្គុទ្ទេសក៍ការងារបរទេស", ne:"विदेशी श्रमिक मार्गदर्शन",
  },
};

export const LABOR_LAWS_TRANSLATED: {
  icon: string;
  key: string;
  title: T14;
  detail: T14;
}[] = [
  {
    icon: "💰", key: "minWage",
    title: { ko:"최저임금", en:"Minimum Wage", zh:"最低工资", vi:"Lương tối thiểu", mn:"Хамгийн бага цалин", id:"Upah Minimum", ms:"Gaji Minimum", ru:"Минимальная зарплата", uz:"Eng kam ish haqi", th:"ค่าแรงขั้นต่ำ", fil:"Minimum Wage", si:"අවම වැටුප", km:"ប្រាក់ឈ្នួលអប្បបរមា", ne:"न्यूनतम ज्याला" },
    detail: { ko:"시간당 10,320원 (2026년 기준)", en:"₩10,320/hour (2026)", zh:"每小时10,320韩元（2026年）", vi:"₩10,320/giờ (2026)", mn:"Цагт 10,320₩ (2026)", id:"₩10,320/jam (2026)", ms:"₩10,320/jam (2026)", ru:"₩10,320/час (2026)", uz:"Soatiga ₩10,320 (2026)", th:"₩10,320/ชั่วโมง (2026)", fil:"₩10,320/oras (2026)", si:"₩10,320/පැය (2026)", km:"₩10,320/ម៉ោង (2026)", ne:"₩10,320/घण्टा (2026)" },
  },
  {
    icon: "☕", key: "break",
    title: { ko:"휴게시간", en:"Break Time", zh:"休息时间", vi:"Thời gian nghỉ", mn:"Завсарлагааны цаг", id:"Waktu Istirahat", ms:"Masa Rehat", ru:"Перерыв", uz:"Dam olish vaqti", th:"เวลาพัก", fil:"Break Time", si:"විවේකය", km:"ពេលសម្រាក", ne:"ब्रेक टाइम" },
    detail: { ko:"4시간→30분, 8시간→1시간 이상", en:"4hrs→30min, 8hrs→1hr+", zh:"4小时→30分钟，8小时→1小时", vi:"4 giờ→30 phút, 8 giờ→1 giờ", mn:"4ц→30мин, 8ц→1цаг", id:"4jam→30mnt, 8jam→1jam", ms:"4jam→30min, 8jam→1jam", ru:"4ч→30мин, 8ч→1ч", uz:"4soat→30daq, 8soat→1soat", th:"4ชม→30นาที, 8ชม→1ชม.", fil:"4hr→30min, 8hr→1hr", si:"4පැ→30 min, 8 පැ→1පැ", km:"4ម.→30ន., 8ម.→1ម.", ne:"4घण्टा→30मिनेट, 8घण्टा→1घण्टा" },
  },
  {
    icon: "🌙", key: "overtime",
    title: { ko:"연장·야간·휴일 수당", en:"Overtime/Night/Holiday Pay", zh:"加班/夜班/节假日工资", vi:"Phụ cấp tăng ca/đêm/lễ", mn:"Илүү цаг/шөнийн/амралтын мөнгө", id:"Lembur/Malam/Libur", ms:"Lebih masa/Malam/Cuti", ru:"Сверхурочные/Ночные/Праздничные", uz:"Qo'shimcha/Tun/Bayram to'lovi", th:"โอที/กลางคืน/วันหยุด", fil:"Overtime/Gabi/Holiday Pay", si:"අතිකාල/රාත්‍රී/නිවාඩු", km:"ម៉ោងបន្ថែម/យប់/ថ្ងៃឈប់", ne:"ओभरटाइम/रात/बिदा भत्ता" },
    detail: { ko:"기본 시급의 50% 가산", en:"50% extra on base wage", zh:"基本工资加50%", vi:"Thêm 50% lương cơ bản", mn:"Үндсэн цалингаас 50% нэмэгдэл", id:"Tambahan 50% dari upah dasar", ms:"Tambahan 50% daripada gaji asas", ru:"Доплата 50% к базовой ставке", uz:"Asosiy ish haqiga 50% qo'shimcha", th:"เพิ่ม 50% จากค่าแรงฐาน", fil:"50% dagdag sa base wage", si:"මූලික වැටුපෙන් 50% අමතර", km:"បន្ថែម 50% ពីប្រាក់ឈ្នួលមូលដ្ឋាន", ne:"आधार ज्यालामा 50% अतिरिक्त" },
  },
  {
    icon: "🏖️", key: "leave",
    title: { ko:"연차 유급휴가", en:"Annual Paid Leave", zh:"年薪带薪休假", vi:"Nghỉ phép có lương", mn:"Жилийн төлбөртэй амралт", id:"Cuti Tahunan Berbayar", ms:"Cuti Tahunan Berbayar", ru:"Ежегодный оплачиваемый отпуск", uz:"Yillik to'lovli ta'til", th:"วันลาพักร้อนที่มีค่าจ้าง", fil:"Annual Paid Leave", si:"වාර්ෂික වේතන නිවාඩු", km:"휴가 ប្រចាំឆ្នាំ", ne:"वार्षिक सशुल्क बिदा" },
    detail: { ko:"1년 근무→15일, 3년 이상→격년 1일 추가(최대25일)", en:"1yr→15 days, 3yr+→+1 day/2yr (max 25)", zh:"工作1年→15天，3年以上每2年+1天(最多25天)", vi:"1 năm→15 ngày, 3 năm+→+1 ngày/2 năm (tối đa 25)", mn:"1жил→15өдөр, 3жил дээш 2жил тутам+1өдөр(25хүртэл)", id:"1th→15hr, 3th+→+1hr/2th (maks 25)", ms:"1th→15hr, 3th+→+1hr/2th (maks 25)", ru:"1год→15дн, 3лет+→+1дн/2лет (макс 25)", uz:"1yil→15kun, 3yil+→+1kun/2yil (maks 25)", th:"1ปี→15วัน, 3ปี+→+1วัน/2ปี (สูงสุด25)", fil:"1taon→15 araw, 3taon+→+1 araw/2taon (max 25)", si:"1 වර→15 දින, 3 + →+1 දින/2 වර (25 දක්වා)", km:"1ឆ្នាំ→15ថ្ងៃ, 3ឆ+→+1ថ/2ឆ (អតិបរមា 25)", ne:"1 वर्ष→15 दिन, 3 वर्ष+→+1 दिन/2 वर्ष (अधिकतम 25)" },
  },
  {
    icon: "💵", key: "severance",
    title: { ko:"퇴직금", en:"Severance Pay", zh:"退职金", vi:"Trợ cấp thôi việc", mn:"Тэтгэмжийн мөнгө", id:"Pesangon", ms:"Wang Pencen", ru:"Выходное пособие", uz:"Ishdan bo'shatish to'lovi", th:"เงินชดเชย", fil:"Severance Pay", si:"සේවා නිමිත්ත ගෙවීම", km:"ប្រាក់ឈប់សម្រាក", ne:"सेवा समाप्ति भुक्तानी" },
    detail: { ko:"1년 이상 근무 후 퇴직→30일분 평균임금", en:"After 1+ year: 30 days avg wage", zh:"工作1年以上退职→30天平均工资", vi:"Nghỉ sau 1+ năm→30 ngày lương TB", mn:"1жилээс дээш ажилласан бол→30өдрийн дундаж цалин", id:"Setelah 1+ tahun→30 hari gaji rata-rata", ms:"Selepas 1+ tahun→30 hari gaji purata", ru:"После 1+ года→30 дней средней зарплаты", uz:"1+ yildan keyin→30 kunlik o'rtacha maosh", th:"หลัง 1+ ปี→ค่าจ้างเฉลี่ย 30 วัน", fil:"Pagkatapos ng 1+ taon→30 araw avg sahod", si:"1+ වර්ෂ →30 දිනේ සාමාන්‍ය වැටුප", km:"បន្ទាប់ 1+ ឆ្នាំ→30ថ្ងៃ ប្រាក់ខែជាមធ្យម", ne:"1+ वर्ष पछि→30 दिनको औसत ज्याला" },
  },
  {
    icon: "🛡️", key: "weeklyHoliday",
    title: { ko:"주휴수당", en:"Weekly Holiday Pay", zh:"周休津贴", vi:"Phụ cấp nghỉ tuần", mn:"Долоо хоногийн амралтын мөнгө", id:"Tunjangan Hari Libur Mingguan", ms:"Elaun Cuti Mingguan", ru:"Еженедельная надбавка за выходной", uz:"Haftalik dam olish to'lovi", th:"เบี้ยเลี้ยงวันหยุดสัปดาห์", fil:"Weekly Holiday Pay", si:"සතිපති නිවාඩු දීමනාව", km:"ប្រាក់ថ្ងៃឈប់សម្រាកប្រចាំសប្តាហ៍", ne:"साप्ताहिक बिदा भत्ता" },
    detail: { ko:"주 15시간 이상 근무 시 1일분 유급 주휴일", en:"1 paid day off/week if working 15+ hrs", zh:"每周工作15小时以上享受1天带薪休息", vi:"Nghỉ 1 ngày có lương/tuần nếu làm 15+ giờ", mn:"7 хоногт 15+ цаг ажилласан бол 1 өдөр", id:"1 hari libur berbayar jika kerja 15+ jam", ms:"1 hari cuti berbayar jika kerja 15+ jam", ru:"1 оплачиваемый выходной при 15+ ч/нед", uz:"15+ soat ishlasangiz 1 kun to'lovli dam olish", th:"1 วันหยุดที่มีค่าจ้างถ้าทำงาน 15+ ชั่วโมง", fil:"1 bayad na araw/linggo kung 15+ oras", si:"15+ ශ්‍රම ෙදිනකදී 1 වෙළඳ නිවාඩු", km:"1 ថ្ងៃឈប់ ប្រសិនបើធ្វើ 15+ ម៉ោង", ne:"15+ घण्टा काम गरेमा 1 सशुल्क बिदा" },
  },
];

// ────────────────────────────────────────────────
// LEGAL VIEW
// ────────────────────────────────────────────────
export const LEGAL_SITUATIONS: {
  id: string; icon: string;
  title: T14;
  steps: Partial<Record<LangCode, string[]>>;
}[] = [
  {
    id:"assault", icon:"🆘",
    title: { ko:"폭행 피해를 당했을 때", en:"When Assaulted", zh:"遭受暴力时", vi:"Khi bị tấn công", mn:"Дарамтанд өртсөн үед", id:"Ketika Diserang", ms:"Ketika Diserang", ru:"При нападении", uz:"Hujumga uchraganda", th:"เมื่อถูกทำร้าย", fil:"Kapag Inatake", si:"පහර දෙන විට", km:"ពេលត្រូវបានវាយប្រហារ", ne:"आक्रमण भएको बेला" },
    steps: {
      ko:["안전한 곳으로 이동하세요","112에 신고하세요","병원에서 진단서를 받으세요","안산시외국인주민상담지원센터(1644-7111)에 연락하세요"],
      en:["Move to a safe place","Call 112","Get a medical certificate from hospital","Contact Ansan Support Center (1644-7111)"],
      zh:["移到安全地方","拨打112报警","到医院开诊断书","联系安山外国居民支援中心(1644-7111)"],
      vi:["Di chuyển đến nơi an toàn","Gọi 112","Lấy giấy chứng nhận y tế từ bệnh viện","Liên hệ Trung tâm hỗ trợ Ansan (1644-7111)"],
      mn:["Аюулгүй газар руу явна уу","112 дуудна уу","Эмнэлэгт оношилгоо авна уу","Ансаны дэмжлэгийн төвд холбогдоно уу (1644-7111)"],
      id:["Pergi ke tempat aman","Hubungi 112","Dapatkan surat keterangan medis","Hubungi Pusat Dukungan Ansan (1644-7111)"],
      ms:["Pergi ke tempat selamat","Hubungi 112","Dapatkan sijil perubatan","Hubungi Pusat Sokongan Ansan (1644-7111)"],
      ru:["Переместитесь в безопасное место","Позвоните 112","Получите медицинскую справку","Свяжитесь с центром поддержки Ансана (1644-7111)"],
      uz:["Xavfsiz joyga boring","112 ga qo'ng'iroq qiling","Tibbiy guvohnoma oling","Ansan qo'llab-quvvatlash markazi (1644-7111) bilan bog'laning"],
      th:["ไปที่ที่ปลอดภัย","โทร 112","รับใบรับรองแพทย์","ติดต่อศูนย์สนับสนุน Ansan (1644-7111)"],
      fil:["Pumunta sa ligtas na lugar","Tumawag ng 112","Kumuha ng medical certificate","Makipag-ugnayan sa Ansan Support Center (1644-7111)"],
      si:["ආරක්ෂිත ස්ථානයකට යන්න","112 ට ඇමතුම් ගන්න","රෝහලෙන් වෛද්‍ය සහතිකය ලබාගන්න","Ansan සහාය මධ්‍යස්ථානය (1644-7111) අමතන්න"],
      km:["ទៅកន្លែងសុវត្ថិភាព","ហៅ 112","ទទួលវិញ្ញាបនបត្រពេទ្យ","ទំនាក់ទំនងមជ្ឈមណ្ឌលអានសាន (1644-7111)"],
      ne:["सुरक्षित ठाउँमा जानुस्","112 मा फोन गर्नुस्","अस्पतालबाट मेडिकल प्रमाणपत्र लिनुस्","अन्सान सहायता केन्द्र (1644-7111) सम्पर्क गर्नुस्"],
    },
  },
  {
    id:"fraud", icon:"📝",
    title: { ko:"사기·계약 문제", en:"Fraud or Contract Issues", zh:"诈骗·合同问题", vi:"Gian lận hoặc vấn đề hợp đồng", mn:"Залилан/гэрээний асуудал", id:"Penipuan atau Masalah Kontrak", ms:"Penipuan atau Isu Kontrak", ru:"Мошенничество/договорные споры", uz:"Firib berish/shartnoma muammolari", th:"การฉ้อโกง/ปัญหาสัญญา", fil:"Pandaraya o Kontrata", si:"වංචා/ගිවිසුම් ගැටලු", km:"ការក្លែងបន្លំ/បញ្ហាកិច្ចសន្យា", ne:"ठगी/अनुबंध समस्या" },
    steps: {
      ko:["계약서와 관련 서류를 보관하세요","대한법률구조공단(132)에 무료 상담을 받으세요","안산시외국인주민상담지원센터(1644-7111)에 연락하세요"],
      en:["Keep all contracts and documents","Get free consultation from KLAC (132)","Contact Ansan Support Center (1644-7111)"],
      zh:["保留合同和相关文件","向韩国法律援助公团(132)免费咨询","联系安山外国居民支援中心(1644-7111)"],
      vi:["Giữ tất cả hợp đồng và tài liệu","Tư vấn miễn phí từ KLAC (132)","Liên hệ Trung tâm Ansan (1644-7111)"],
      mn:["Гэрээ, баримт бичгийг хадгалаарай","KLAC-аас үнэгүй зөвлөгөө авна уу (132)","Ансаны дэмжлэгийн төвд холбогдоно уу (1644-7111)"],
      id:["Simpan semua kontrak dan dokumen","Konsultasi gratis ke KLAC (132)","Hubungi Pusat Dukungan Ansan (1644-7111)"],
      ms:["Simpan semua kontrak dan dokumen","Konsultasi percuma dari KLAC (132)","Hubungi Pusat Sokongan Ansan (1644-7111)"],
      ru:["Сохраните все договоры и документы","Бесплатная консультация в KLAC (132)","Свяжитесь с центром Ансана (1644-7111)"],
      uz:["Barcha shartnoma va hujjatlarni saqlang","KLAC (132) dan bepul maslahat oling","Ansan markazi (1644-7111) bilan bog'laning"],
      th:["เก็บสัญญาและเอกสารทั้งหมด","รับคำปรึกษาฟรีจาก KLAC (132)","ติดต่อศูนย์ Ansan (1644-7111)"],
      fil:["Itago ang lahat ng kontrata at dokumento","Libreng konsultasyon sa KLAC (132)","Makipag-ugnayan sa Ansan Center (1644-7111)"],
      si:["සියලු ගිවිසුම් ලේඛන රැක ගන්න","KLAC (132) සිට නිදහස් උපදෙස් ලබාගන්න","Ansan මධ්‍යස්ථානය (1644-7111) සම්පර්ක කරන්න"],
      km:["រក្សាទុកកិច្ចសន្យានិងឯកសារ","ទទួលការប្រឹក្សាឥតគិតថ្លៃពី KLAC (132)","ទំនាក់ទំនង Ansan Center (1644-7111)"],
      ne:["सबै अनुबंध र कागजात राख्नुस्","KLAC (132) बाट निःशुल्क परामर्श लिनुस्","अन्सान केन्द्र (1644-7111) सम्पर्क गर्नुस्"],
    },
  },
  {
    id:"visa", icon:"🛂",
    title: { ko:"체류·비자 문제", en:"Visa & Residency Issues", zh:"居留·签证问题", vi:"Vấn đề thị thực/cư trú", mn:"Оршин суух/визийн асуудал", id:"Masalah Visa/Tinggal", ms:"Isu Visa/Kediaman", ru:"Визовые/резидентские вопросы", uz:"Viza/yashash muammolari", th:"ปัญหาวีซ่า/พำนัก", fil:"Visa/Residency Issues", si:"වීසා/නවාතැන් ගැටලු", km:"បញ្ហាទិដ្ឋាការ/លំនៅ", ne:"भिसा/बसोबास समस्या" },
    steps: {
      ko:["외국인종합안내센터(1345)에 문의하세요","안산출입국외국인사무소에 방문하세요","체류 기간 초과 전 반드시 연장 신청하세요"],
      en:["Call Korea Immigration Service (1345)","Visit Ansan Immigration Office","Apply for extension BEFORE visa expires"],
      zh:["联系外国人综合咨询中心(1345)","前往安山出入境外国人事务所","签证到期前必须申请延期"],
      vi:["Gọi Trung tâm thông tin người nước ngoài (1345)","Đến văn phòng xuất nhập cảnh Ansan","Xin gia hạn TRƯỚC khi visa hết hạn"],
      mn:["Гадаадын иргэдийн мэдээллийн төвд (1345) холбогдоно уу","Ансаны цагаачлалын газарт очно уу","Визийн хугацаа дуусахаас ӨМНӨ сунгалт хийлгэнэ үү"],
      id:["Hubungi Pusat Informasi Orang Asing (1345)","Kunjungi Kantor Imigrasi Ansan","Ajukan perpanjangan SEBELUM visa berakhir"],
      ms:["Hubungi Pusat Maklumat Orang Asing (1345)","Lawati Pejabat Imigresen Ansan","Mohon pelanjutan SEBELUM visa tamat"],
      ru:["Позвоните в информационный центр (1345)","Посетите офис иммиграции Ансана","Подайте заявку на продление ДО истечения визы"],
      uz:["Xorijliklar axborot markaziga qo'ng'iroq qiling (1345)","Ansan immigratsiya ofisiga tashrif buyuring","Viza muddati tugashidan OLDIN uzaytiring"],
      th:["โทรหาศูนย์ข้อมูลชาวต่างชาติ (1345)","ไปสำนักงานตรวจคนเข้าเมือง Ansan","ต่ออายุวีซ่าก่อนหมดอายุ"],
      fil:["Tumawag sa Immigration Info Center (1345)","Bisitahin ang Ansan Immigration Office","Mag-apply ng extension BAGO matapos ang visa"],
      si:["විදේශිකයන් තොරතුරු මධ්‍යස්ථානයට (1345) ඇමතුම් ගන්න","Ansan ආගමන කාර්යාලයට යන්න","වීසා ඉකුත් වීමට පෙර දීර්ඝ කිරීම ඉල්ලන්න"],
      km:["ហៅមជ្ឈមណ្ឌលព័ត៌មានជនបរទេស (1345)","ទៅការិយាល័យអន្តោប្រវេសន៍ Ansan","ដាក់ពាក្យបន្តVisa មុនផុតកំណត់"],
      ne:["विदेशी सूचना केन्द्रमा (1345) फोन गर्नुस्","अन्सान आप्रवासन कार्यालय जानुस्","भिसा समाप्त हुनु अघि नवीकरण गर्नुस्"],
    },
  },
  {
    id:"harassment", icon:"🛡️",
    title: { ko:"성희롱·차별 피해", en:"Sexual Harassment or Discrimination", zh:"性骚扰·歧视被害", vi:"Quấy rối tình dục hoặc phân biệt đối xử", mn:"Бэлгийн дарамт/ялгаварлал", id:"Pelecehan Seksual/Diskriminasi", ms:"Gangguan Seksual/Diskriminasi", ru:"Сексуальные домогательства/дискриминация", uz:"Jinsiy zo'ravonlik/kamsitish", th:"การล่วงละเมิด/เลือกปฏิบัติ", fil:"Sexual Harassment/Diskriminasyon", si:"ලිංගික හිරිහැර/වෙනස් කොට සලකීම", km:"ការ​រំលោភ​បំពាន​ផ្លូវ​ភេទ/​ការ​រើស​អើង", ne:"यौन दुर्व्यवहार/भेदभाव" },
    steps: {
      ko:["안전한 곳으로 이동하세요","국가인권위원회(1331)에 신고하세요","안산시외국인주민상담지원센터(1644-7111)에 연락하세요"],
      en:["Move to a safe place","Report to National Human Rights Commission (1331)","Contact Ansan Support Center (1644-7111)"],
      zh:["移到安全地方","向国家人权委员会举报(1331)","联系安山外国居民支援中心(1644-7111)"],
      vi:["Di chuyển đến nơi an toàn","Báo cáo lên Ủy ban Nhân quyền (1331)","Liên hệ Trung tâm Ansan (1644-7111)"],
      mn:["Аюулгүй газар руу явна уу","Үндэсний хүний эрхийн комисст (1331) гомдол гаргана уу","Ансаны дэмжлэгийн төвд холбогдоно уу (1644-7111)"],
      id:["Pergi ke tempat aman","Laporkan ke Komisi HAM (1331)","Hubungi Pusat Dukungan Ansan (1644-7111)"],
      ms:["Pergi ke tempat selamat","Laporkan kepada Suruhanjaya HAM (1331)","Hubungi Pusat Sokongan Ansan (1644-7111)"],
      ru:["Переместитесь в безопасное место","Сообщите в Комиссию по правам человека (1331)","Свяжитесь с центром Ансана (1644-7111)"],
      uz:["Xavfsiz joyga boring","Inson huquqlari komissiyasiga xabar bering (1331)","Ansan markazi (1644-7111) bilan bog'laning"],
      th:["ไปที่ที่ปลอดภัย","รายงานต่อคณะกรรมการสิทธิมนุษยชน (1331)","ติดต่อศูนย์ Ansan (1644-7111)"],
      fil:["Pumunta sa ligtas na lugar","I-ulat sa National Human Rights Commission (1331)","Makipag-ugnayan sa Ansan Center (1644-7111)"],
      si:["ආරක්ෂිත ස්ථානයකට යන්න","ජාතික මානව හිමිකම් කොමිෂන් (1331) වෙත වාර්තා කරන්න","Ansan මධ්‍යස්ථානය (1644-7111) සම්පර්ක කරන්න"],
      km:["ទៅកន្លែងសុវត្ថិភាព","រាយការណ៍ទៅគណៈកម្មការសិទ្ធិមនុស្ស (1331)","ទំនាក់ទំនង Ansan Center (1644-7111)"],
      ne:["सुरक्षित ठाउँमा जानुस्","राष्ट्रिय मानव अधिकार आयोग (1331) मा रिपोर्ट गर्नुस्","अन्सान केन्द्र (1644-7111) सम्पर्क गर्नुस्"],
    },
  },
];

export const LEGAL_CONTACTS: { label: T14; number: string }[] = [
  { number:"1644-7111", label:{ ko:"안산시외국인주민상담지원센터", en:"Ansan Foreign Residents Support", zh:"安山外国居民支援中心", vi:"Trung tâm hỗ trợ Ansan", mn:"Ансан гадаадын иргэдийн дэмжлэгийн төв", id:"Pusat Dukungan Warga Asing Ansan", ms:"Pusat Sokongan Warga Asing Ansan", ru:"Центр поддержки иностранцев Ансана", uz:"Ansan chet el fuqarolari markazi", th:"ศูนย์สนับสนุนผู้อยู่อาศัยต่างชาติ Ansan", fil:"Ansan Foreign Residents Support", si:"Ansan විදේශ පදිංචිකරුවන් සහාය", km:"មជ្ឈមណ្ឌលគាំទ្រ Ansan", ne:"अन्सान विदेशी बासिन्दा सहायता" }},
  { number:"132", label:{ ko:"대한법률구조공단 (무료 상담)", en:"Korea Legal Aid Corp (Free)", zh:"韩国法律援助公团（免费）", vi:"Công đoàn hỗ trợ pháp lý Hàn Quốc (Miễn phí)", mn:"Солонгосын хуулийн туслалцааны байгууллага (үнэгүй)", id:"Lembaga Bantuan Hukum Korea (Gratis)", ms:"Pertubuhan Bantuan Undang-undang Korea (Percuma)", ru:"Организация юридической помощи Кореи (бесплатно)", uz:"Koreya huquqiy yordam tashkiloti (bepul)", th:"องค์กรช่วยเหลือทางกฎหมายเกาหลี (ฟรี)", fil:"Korea Legal Aid Corp (Libre)", si:"කොරියා නීතිමය ආධාර සංගමය (නිදහස්)", km:"អង្គភាពជំនួយផ្នែកច្បាប់ (ឥតគិតថ្លៃ)", ne:"कोरिया कानूनी सहायता निगम (निःशुल्क)" }},
  { number:"1345", label:{ ko:"외국인종합안내센터 (24시간)", en:"Immigration Info Center (24hrs)", zh:"外国人综合咨询中心（24小时）", vi:"Trung tâm thông tin người nước ngoài (24 giờ)", mn:"Гадаадын иргэдийн мэдээллийн төв (24ц)", id:"Pusat Informasi Orang Asing (24 jam)", ms:"Pusat Maklumat Orang Asing (24 jam)", ru:"Информационный центр для иностранцев (24ч)", uz:"Xorijliklar axborot markazi (24 soat)", th:"ศูนย์ข้อมูลสำหรับชาวต่างชาติ (24 ชม.)", fil:"Immigration Info Center (24 oras)", si:"විදේශ ජනතා තොරතුරු කේන්ද්‍රය (24 ක)", km:"មជ្ឈមណ្ឌលព័ត៌មានជនបរទេស (24 ម៉ោង)", ne:"विदेशी सूचना केन्द्र (२४ घण्टा)" }},
  { number:"1331", label:{ ko:"국가인권위원회", en:"National Human Rights Commission", zh:"国家人权委员会", vi:"Ủy ban Nhân quyền Quốc gia", mn:"Үндэсний хүний эрхийн комисс", id:"Komisi Hak Asasi Manusia", ms:"Suruhanjaya Hak Asasi Manusia", ru:"Национальная комиссия по правам человека", uz:"Milliy inson huquqlari komissiyasi", th:"คณะกรรมการสิทธิมนุษยชนแห่งชาติ", fil:"National Human Rights Commission", si:"ජාතික මානව හිමිකම් කොමිෂන් සභාව", km:"គណៈកម្មការជាតិសិទ្ធិមនុស្ស", ne:"राष्ट्रिय मानव अधिकार आयोग" }},
];

// ────────────────────────────────────────────────
// INDUSTRIAL VIEW
// ────────────────────────────────────────────────
export const INDUSTRIAL_DEFINITION: T14 = {
  ko:"산재(산업재해)란 업무 중 발생한 부상·질병·사망을 말하며, 외국인 근로자도 동일하게 보상받을 권리가 있습니다.",
  en:"Industrial accidents (work injuries, illness, or death) — foreign workers have the same right to compensation as Korean workers.",
  zh:"工伤（产业灾害）是指在工作中发生的受伤、疾病、死亡，外籍劳工同样享有获得赔偿的权利。",
  vi:"Tai nạn lao động là chấn thương, bệnh tật, tử vong xảy ra trong công việc — lao động nước ngoài có quyền được bồi thường như công nhân Hàn Quốc.",
  mn:"Үйлдвэрийн осол гэдэг нь ажлын үеэр гарсан гэмтэл, өвчин, нас баралтыг хэлнэ. Гадаадын ажилчид мөн адил нөхөн олговор авах эрхтэй.",
  id:"Kecelakaan kerja (cedera, penyakit, atau kematian akibat pekerjaan) — pekerja asing berhak mendapat kompensasi yang sama dengan pekerja Korea.",
  ms:"Kemalangan perindustrian (kecederaan, penyakit, atau kematian akibat kerja) — pekerja asing berhak mendapat pampasan yang sama seperti pekerja Korea.",
  ru:"Производственная травма — это травма, заболевание или смерть на производстве. Иностранные работники имеют такое же право на компенсацию, как и корейские.",
  uz:"Ishlab chiqarish baxtsizligi — ishda sodir bo'lgan shikast, kasallik yoki o'lim. Xorijiy ishchilar Koreya ishchilari bilan bir xil tovon olish huquqiga ega.",
  th:"อุบัติเหตุอุตสาหกรรม คือการบาดเจ็บ เจ็บป่วย หรือเสียชีวิตจากการทำงาน — แรงงานต่างชาติมีสิทธิ์ได้รับค่าชดเชยเหมือนกับแรงงานเกาหลี",
  fil:"Ang industrial accident (pinsala, sakit, o kamatayan mula sa trabaho) — ang mga manggagawang dayuhan ay may karapatan sa parehong kabayaran tulad ng mga manggagawang Koreano.",
  si:"කාර්මික අනතුරු (රැකියාවෙන් ලැබෙන තුවාල, රෝගය හෝ මරණය) — විදේශ කම්කරුවන්ට කොරියාවේ කම්කරුවන් හා සමාන වන්දි ලැබීමේ අයිතිය ඇත.",
  km:"គ្រោះថ្នាក់ការងារ (របួស ជំងឺ ឬស្លាប់ដោយសារការងារ) — កម្មករបរទេស​មាន​សិទ្ធិ​ទទួល​ ​ការ​ទូទាត់​ដូច​គ្នា​ដូច​កម្មករ​កូរ៉េ​ដែរ។",
  ne:"औद्योगिक दुर्घटना (काममा लागेको चोट, रोग वा मृत्यु) — विदेशी श्रमिकहरूलाई पनि कोरियाली श्रमिकहरू जस्तै क्षतिपूर्ति पाउने अधिकार छ।",
};

export const INDUSTRIAL_STEPS: Partial<Record<LangCode, string[]>> = {
  ko:["사고 발생 즉시 119에 연락하세요","사업주에게 산재 사실을 알리세요","병원에서 '업무상재해'임을 알리고 치료받으세요","근로복지공단(1588-0075)에 산재 신청을 하세요","필요 서류: 요양급여신청서, 재해경위서, 진단서"],
  en:["Call 119 immediately","Notify your employer of the accident","Tell hospital it is a work-related injury","Apply at KCOMWEL (1588-0075)","Required docs: Treatment application, Accident report, Medical certificate"],
  zh:["立即拨打119","向雇主报告工伤事实","在医院告知是'工伤'并接受治疗","向劳工福利公团(1588-0075)申请工伤","所需文件：疗养给付申请书、灾害经过书、诊断书"],
  vi:["Gọi 119 ngay lập tức","Thông báo cho chủ lao động về tai nạn","Cho bệnh viện biết đây là tai nạn lao động","Nộp đơn tại KCOMWEL (1588-0075)","Tài liệu: Đơn xin điều trị, Báo cáo tai nạn, Giấy chứng nhận y tế"],
  mn:["Яаралтай 119 дуудна уу","Ажил олгогчид осолдсон тухай мэдэгдэнэ үү","Эмнэлэгт 'ажлын гэмтэл' гэж хэлнэ үү","KCOMWEL (1588-0075)-д өргөдөл гаргана уу","Шаардлагатай баримт: Эмчилгээний хүсэлт, осолын тайлан, оношилгоо"],
  id:["Hubungi 119 segera","Beritahu majikan tentang kecelakaan","Beritahu rumah sakit bahwa itu kecelakaan kerja","Daftarkan di KCOMWEL (1588-0075)","Dokumen: Formulir pengobatan, Laporan kecelakaan, Surat keterangan dokter"],
  ms:["Hubungi 119 segera","Maklumkan majikan tentang kemalangan","Beritahu hospital bahawa ia kemalangan kerja","Daftar di KCOMWEL (1588-0075)","Dokumen: Borang rawatan, Laporan kemalangan, Sijil perubatan"],
  ru:["Немедленно позвоните 119","Сообщите работодателю о несчастном случае","Сообщите в больнице, что это производственная травма","Подайте заявку в KCOMWEL (1588-0075)","Документы: заявление на лечение, отчёт об аварии, медсправка"],
  uz:["Darhol 119 ga qo'ng'iroq qiling","Ish beruvchini baxtsiz hodisa haqida xabardor qiling","Kasalxonaga bu ish joyi jarohati ekanligini ayting","KCOMWEL (1588-0075) ga ariza bering","Hujjatlar: davolash arizasi, hodisa hisoboti, tibbiy guvohnoma"],
  th:["โทร 119 ทันที","แจ้งนายจ้างเกี่ยวกับอุบัติเหตุ","บอกโรงพยาบาลว่าเป็นการบาดเจ็บจากการทำงาน","ยื่นคำร้องที่ KCOMWEL (1588-0075)","เอกสาร: แบบฟอร์มการรักษา, รายงานอุบัติเหตุ, ใบรับรองแพทย์"],
  fil:["Tumawag ng 119 agad","Ipaalam sa employer ang tungkol sa aksidente","Sabihin sa ospital na ito ay work-related injury","Mag-apply sa KCOMWEL (1588-0075)","Dokumento: Treatment form, Accident report, Medical certificate"],
  si:["වහාම 119 ට ඇමතුම් ගන්න","ස්වකීය සේවා යෝජකයාට දන්වන්න","රෝහලට රැකියා ආශ්‍රිත තුවාලයක් බව දන්වන්න","KCOMWEL (1588-0075) හි ඉල්ලුම් කරන්න","ලේඛන: ප්‍රතිකාර ෆෝමය, සිදුවීම් වාර්තාව, වෛද්‍ය සහතිකය"],
  km:["ហៅ 119 ភ្លាម","ជូនដំណឹងដល់និយោជក","ប្រាប់មន្ទីរពេទ្យថាជារបួសការងារ","ដាក់ពាក្យនៅ KCOMWEL (1588-0075)","ឯកសារ: ទម្រង់ព្យាបាល, របាយការណ៍គ្រោះថ្នាក់, វិញ្ញាបនបត្រពេទ្យ"],
  ne:["तुरुन्त 119 मा फोन गर्नुस्","रोजगारदातालाई दुर्घटनाको जानकारी दिनुस्","अस्पताललाई कामसम्बन्धी चोट भएको बताउनुस्","KCOMWEL (1588-0075) मा आवेदन दिनुस्","कागजात: उपचार फारम, दुर्घटना रिपोर्ट, मेडिकल प्रमाणपत्र"],
};

export const HAZARDS: {
  id: string; icon: string;
  title: T14;
  actions: Partial<Record<LangCode, string[]>>;
}[] = [
  {
    id:"entanglement", icon:"⚙️",
    title:{ ko:"기계 끼임", en:"Machine Entanglement", zh:"机械卡扎", vi:"Kẹt máy", mn:"Машинд орох", id:"Terjepit Mesin", ms:"Tersepit Mesin", ru:"Захват машиной", uz:"Mashinaga ilinib qolish", th:"ติดเครื่องจักร", fil:"Machine Entanglement", si:"යන්ත්‍රයෙහි හසු වීම", km:"ជាប់ម៉ាស៊ីន", ne:"मेशिनमा अड्किनु" },
    actions:{
      ko:["즉시 기계 전원을 차단하세요","119에 신고하세요","함부로 빼내지 마세요"],
      en:["Cut machine power immediately","Call 119","Do NOT try to pull out"],
      zh:["立即切断机器电源","拨打119","不要强行拔出"],
      vi:["Ngắt nguồn máy ngay lập tức","Gọi 119","KHÔNG cố rút ra"],
      mn:["Машины цахилгааныг яаралтай тасална уу","119 дуудна уу","Хүчээр гаргах гэж болохгүй"],
      id:["Matikan mesin segera","Hubungi 119","JANGAN coba menarik keluar"],
      ms:["Putuskan kuasa mesin segera","Hubungi 119","JANGAN cuba tarik keluar"],
      ru:["Немедленно отключите питание машины","Позвоните 119","НЕ пытайтесь вытащить"],
      uz:["Mashina quvvatini zudlik bilan o'chiring","119 ga qo'ng'iroq qiling","CHIQARMAYMAN deb urinmang"],
      th:["ตัดไฟเครื่องจักรทันที","โทร 119","อย่าพยายามดึงออก"],
      fil:["Patayin ang makina agad","Tumawag ng 119","HUWAG subukang bunutin"],
      si:["යන්ත්‍රයේ විදුලිය කපන්න","119 ට ඇමතුම් ගන්න","ඇදගන්නට උත්සාහ නොකරන්න"],
      km:["កាត់ចរន្តភ្លើងម៉ាស៊ីន","ហៅ 119","កុំព្យាយាមទាញចេញ"],
      ne:["मेशिनको बिजुली तुरुन्त काट्नुस्","119 मा फोन गर्नुस्","बाहिर तान्न कोसिस नगर्नुस्"],
    },
  },
  {
    id:"fire", icon:"🔥",
    title:{ ko:"화재", en:"Fire", zh:"火灾", vi:"Hỏa hoạn", mn:"Гал", id:"Kebakaran", ms:"Kebakaran", ru:"Пожар", uz:"Yong'in", th:"เพลิงไหม้", fil:"Sunog", si:"ගිනිගැනීම", km:"អគ្គីភ័យ", ne:"आगो" },
    actions:{
      ko:["대피 후 119 신고","소화기 사용법 숙지","지정된 비상구로 이동"],
      en:["Evacuate then call 119","Know how to use fire extinguisher","Use designated emergency exits"],
      zh:["疏散后拨打119","熟悉灭火器用法","走指定紧急出口"],
      vi:["Sơ tán rồi gọi 119","Biết cách dùng bình cứu hỏa","Dùng lối thoát hiểm được chỉ định"],
      mn:["Нүүлгэн шилжүүлсний дараа 119 дуудна уу","Галын тэсэгчийг хэрхэн ашиглах талаар мэдэж байгаарай","Тогтоосон яаралтай гарцаар явна уу"],
      id:["Evakuasi lalu hubungi 119","Ketahui cara menggunakan pemadam api","Gunakan pintu darurat yang ditunjuk"],
      ms:["Berpindah kemudian hubungi 119","Ketahui cara menggunakan alat pemadam","Gunakan pintu kecemasan yang ditetapkan"],
      ru:["Эвакуируйтесь, затем вызовите 119","Знайте как пользоваться огнетушителем","Используйте обозначенные аварийные выходы"],
      uz:["Evakuatsiya qilib 119 ga qo'ng'iroq qiling","O't o'chirish vositasidan foydalanishni biling","Belgilangan favqulodda chiqishlardan foydalaning"],
      th:["อพยพแล้วโทร 119","รู้วิธีใช้ถังดับเพลิง","ใช้ทางออกฉุกเฉินที่กำหนด"],
      fil:["Lumikas tapos tumawag ng 119","Malaman ang paggamit ng fire extinguisher","Gamitin ang itinalagang emergency exits"],
      si:["ඉවත් වී 119 ඇමතුම් ගන්න","ගිනිනිවන යන්ත්‍රය භාවිතය දැනගන්න","නිශ්චිත හදිසි ද්වාර භාවිතා කරන්න"],
      km:["ចាកចេញ បន្ទាប់មកហៅ 119","ដឹងពីរបៀបប្រើប្រាស់ម៉ាស៊ីនពន្លត់ភ្លើង","ប្រើច្រកចេញបន្ទាន់ដែលកំណត់"],
      ne:["बाहिर निस्की 119 मा फोन गर्नुस्","आगो निभाउने यन्त्र प्रयोग जान्नुस्","तोकिएको आपतकालीन ढोका प्रयोग गर्नुस्"],
    },
  },
  {
    id:"electric_shock", icon:"⚡",
    title:{ ko:"감전", en:"Electric Shock", zh:"触电", vi:"Điện giật", mn:"Цахилгааны цохилт", id:"Sengatan Listrik", ms:"Renjatan Elektrik", ru:"Удар током", uz:"Elektr toki urishi", th:"ไฟฟ้าช็อต", fil:"Electric Shock", si:"විදුලි කම්පනය", km:"ឆក់ភ្លើង", ne:"बिजुली झट्का" },
    actions:{
      ko:["전원 차단 후 접근","감전자 직접 접촉 금지","119 신고"],
      en:["Cut power before approaching","Do NOT touch victim directly","Call 119"],
      zh:["切断电源后再靠近","禁止直接接触触电者","拨打119"],
      vi:["Cắt điện trước khi tiếp cận","KHÔNG chạm vào nạn nhân trực tiếp","Gọi 119"],
      mn:["Цахилгааныг тасалсны дараа ойртоно уу","Хохирогчтой шууд харьцаж болохгүй","119 дуудна уу"],
      id:["Putuskan listrik sebelum mendekati","JANGAN sentuh korban langsung","Hubungi 119"],
      ms:["Putuskan bekalan elektrik sebelum menghampiri","JANGAN sentuh mangsa terus","Hubungi 119"],
      ru:["Отключите питание перед приближением","НЕ прикасайтесь к пострадавшему напрямую","Позвоните 119"],
      uz:["Yaqinlashishdan oldin quvvatni o'chiring","Jabrdiydaga bevosita tegmang","119 ga qo'ng'iroq qiling"],
      th:["ตัดไฟก่อนเข้าใกล้","อย่าสัมผัสผู้ประสบเหตุโดยตรง","โทร 119"],
      fil:["Huwag lapitan hanggang hindi puputol ng kuryente","HUWAG hawakan ang biktima nang direkta","Tumawag ng 119"],
      si:["ළඟා වීමට පෙර විදුලිය කපන්න","ගොදුරට සෘජුව ස්පර්ශ නොකරන්න","119 ට ඇමතුම් ගන්න"],
      km:["កាត់ចរន្តភ្លើងមុនចូលជិត","កុំប៉ះជនរងគ្រោះដោយផ្ទាល់","ហៅ 119"],
      ne:["नजिक जानु अघि बिजुली काट्नुस्","पीडितलाई सीधा नछुनुस्","119 मा फोन गर्नुस्"],
    },
  },
  {
    id:"fall", icon:"⬇️",
    title:{ ko:"추락", en:"Fall", zh:"坠落", vi:"Ngã cao", mn:"Унах", id:"Jatuh dari ketinggian", ms:"Jatuh dari ketinggian", ru:"Падение с высоты", uz:"Balandlikdan tushish", th:"ตกจากที่สูง", fil:"Pagkahulog", si:"ඉහළ ස්ථානයකින් වැටීම", km:"ធ្លាក់ពីកំពស់", ne:"उचाइबाट खस्नु" },
    actions:{
      ko:["안전모·안전대 착용 필수","추락 사고 시 즉시 119 신고","이동 금지, 현장 유지"],
      en:["Always wear helmet & harness","Call 119 immediately if fall occurs","Do not move — preserve the scene"],
      zh:["必须佩戴安全帽和安全带","发生坠落事故立即拨打119","禁止移动，保持现场"],
      vi:["Luôn đeo mũ bảo hộ và dây an toàn","Gọi 119 ngay khi xảy ra tai nạn","Không di chuyển — bảo toàn hiện trường"],
      mn:["Хамгаалалтын малгай, бүс заавал өмс","Унасан тохиолдолд яаралтай 119 дуудна уу","Хөдлүүлж болохгүй, задгай байлга"],
      id:["Selalu pakai helm & harness","Hubungi 119 segera jika terjadi jatuh","Jangan dipindahkan — jaga lokasi kejadian"],
      ms:["Sentiasa pakai helmet & harness","Hubungi 119 segera jika berlaku jatuh","Jangan bergerak — jaga kawasan kejadian"],
      ru:["Всегда надевайте каску и страховку","Немедленно вызовите 119 при падении","Не перемещать — сохранить место происшествия"],
      uz:["Doimo shlem va xavfsizlik kamarini kiyib yuring","Qulasa darhol 119 ga qo'ng'iroq qiling","Harakat qilmang — joyni saqlang"],
      th:["ต้องสวมหมวกนิรภัยและสายรัดเสมอ","โทร 119 ทันทีถ้าเกิดการตก","อย่าเคลื่อนย้าย — รักษาสถานที่เกิดเหตุ"],
      fil:["Laging magsuot ng helmet at harness","Tumawag ng 119 agad kung may pagkahulog","Huwag gumalaw — panatilihin ang lugar"],
      si:["සෑම විටම ශිරස් ආවරණ සහ ආරක්ෂක තීරු පැළඳිය යුතුය","ඇලෙකයක් ඇති විට 119 ට ඇමතුම් ගන්න","නොපෙරළා — ස්ථානය ආරක්ෂා කරන්න"],
      km:["តែងតែពាក់មួកសុវត្ថិភាព​ & ខ្សែ","ហៅ 119 ភ្លាមក្នុងករណីធ្លាក់","កុំផ្លាស់ទី — រក្សាទីកន្លែង"],
      ne:["सधैं हेल्मेट र ह्यार्नेस लगाउनुस्","खसे तुरुन्त 119 मा फोन गर्नुस्","नहल्नुस् — ठाउँ जोगाउनुस्"],
    },
  },
];

export const INDUSTRIAL_CONTACTS: { label: T14; number?: string; website?: string }[] = [
  { number:"031-481-3300", label:{ ko:"안산시외국인주민상담지원센터 (10개 언어)", en:"Ansan Foreign Residents Support Center (10 languages)", zh:"安山外国居民支援中心（10种语言）", vi:"Trung tâm hỗ trợ Ansan (10 ngôn ngữ)", mn:"Ансан гадаадын иргэдийн дэмжлэгийн төв (10 хэл)", id:"Pusat Dukungan Warga Asing Ansan (10 bahasa)", ms:"Pusat Sokongan Warga Asing Ansan (10 bahasa)", ru:"Центр поддержки Ансана (10 языков)", uz:"Ansan markazi (10 til)", th:"ศูนย์สนับสนุน Ansan (10 ภาษา)", fil:"Ansan Support Center (10 wika)", si:"Ansan සහාය මධ්‍යස්ථානය (භාෂා 10)", km:"មជ្ឈមណ្ឌលអានសាន (10 ភាសា)", ne:"अन्सान सहायता केन्द्र (10 भाषा)" }},
  { number:"1577-0071", label:{ ko:"외국인력상담센터 (18개 언어, 안산 단원구)", en:"Foreign Workers Consultation Center (18 languages)", zh:"外国劳动力咨询中心（18种语言）", vi:"Trung tâm tư vấn lao động nước ngoài (18 ngôn ngữ)", mn:"Гадаадын ажилчдын зөвлөх төв (18 хэл)", id:"Pusat Konsultasi Tenaga Kerja Asing (18 bahasa)", ms:"Pusat Perundingan Pekerja Asing (18 bahasa)", ru:"Консультационный центр для иностранных работников (18 языков)", uz:"Xorijiy ishchilar konsultatsiya markazi (18 til)", th:"ศูนย์ปรึกษาแรงงานต่างชาติ (18 ภาษา)", fil:"Foreign Workers Consultation Center (18 wika)", si:"විදේශ කම්කරු උපදේශන මධ්‍යස්ථානය (භාෂා 18)", km:"មជ្ឈមណ្ឌលប្រឹក្សាកម្មករបរទេស (18 ភាសា)", ne:"विदेशी कामदार परामर्श केन्द्र (18 भाषा)" }},
  { number:"1588-0075", label:{ ko:"근로복지공단 고객센터", en:"KCOMWEL Customer Center", zh:"劳动福利公团客户中心", vi:"Tổng đài khách hàng KCOMWEL", mn:"KCOMWEL үйлчлүүлэгчийн төв", id:"Pusat Layanan KCOMWEL", ms:"Pusat Pelanggan KCOMWEL", ru:"Центр обслуживания KCOMWEL", uz:"KCOMWEL mijozlar markazi", th:"ศูนย์บริการ KCOMWEL", fil:"KCOMWEL Customer Center", si:"KCOMWEL ගනුදෙනුකරු මධ්‍යස්ථානය", km:"មជ្ឈមណ្ឌលអតិថិជន KCOMWEL", ne:"KCOMWEL ग्राहक सेवा" }},
  { number:"1345", label:{ ko:"외국인종합안내센터 (체류·산재 안내)", en:"Korea Immigration & Info Center (24hrs)", zh:"外国人综合咨询中心（居留·工伤指南）", vi:"Trung tâm thông tin người nước ngoài (hướng dẫn cư trú & TNLĐ)", mn:"Гадаадын иргэдийн мэдээллийн төв (24ц)", id:"Pusat Informasi Orang Asing (24 jam)", ms:"Pusat Maklumat Orang Asing (24 jam)", ru:"Информационный центр для иностранцев (24ч)", uz:"Xorijliklar markazi (24 soat)", th:"ศูนย์ข้อมูลสำหรับชาวต่างชาติ (24 ชม.)", fil:"Immigration Info Center (24 oras)", si:"විදේශ ජනතා මධ්‍යස්ථානය (24 ක)", km:"មជ្ឈមណ្ឌលព័ត៌មានជនបរទេស (24 ម)", ne:"विदेशी सूचना केन्द्र (२४ घण्टा)" }},
  { number:"119", label:{ ko:"응급 신고 (119)", en:"Emergency Call (119)", zh:"紧急报警 (119)", vi:"Cuộc gọi khẩn cấp (119)", mn:"Яаралтай дуудлага (119)", id:"Darurat (119)", ms:"Kecemasan (119)", ru:"Экстренный вызов (119)", uz:"Favqulodda qo'ng'iroq (119)", th:"โทรฉุกเฉิน (119)", fil:"Emergency Call (119)", si:"හදිසි ඇමතුම (119)", km:"ហៅបន្ទាន់ (119)", ne:"आपतकालीन फोन (119)" }},
];

// ────────────────────────────────────────────────
// CHAT VIEW
// ────────────────────────────────────────────────
export const CHAT_QUICK: Partial<Record<LangCode, string[]>> = {
  ko:["일하다가 손을 다쳤어요","월급을 안 줘요","비자 기간이 지났어요","병원에 가야 하는데 한국어를 못해요"],
  en:["I got injured at work","My employer won't pay me","My visa has expired","I need to go to hospital but can't speak Korean"],
  zh:["工作中受伤了","老板不给工资","签证已过期","我需要去医院但不会韩语"],
  vi:["Tôi bị thương khi làm việc","Chủ không trả lương cho tôi","Visa của tôi đã hết hạn","Tôi cần đến bệnh viện nhưng không biết tiếng Hàn"],
  mn:["Ажлын явцад гэмтлээ","Цалин өгөхгүй байна","Визийн хугацаа дууссан","Эмнэлэгт очих хэрэгтэй ч солонгос хэл мэдэхгүй"],
  id:["Saya terluka saat bekerja","Majikan tidak membayar gaji saya","Visa saya sudah habis","Saya harus ke rumah sakit tapi tidak bisa bahasa Korea"],
  ms:["Saya cedera semasa bekerja","Majikan tidak membayar gaji saya","Visa saya sudah tamat","Saya perlu ke hospital tetapi tidak boleh berbahasa Korea"],
  ru:["Я получил травму на работе","Работодатель не платит зарплату","Мой визовый срок истёк","Нужно в больницу, но не знаю корейского"],
  uz:["Ishda jarohatlandi","Ish beruvchi ish haqi bermayapti","Mening vizam muddati tugadi","Kasalxonaga borish kerak lekin koreycha bilmayman"],
  th:["ฉันได้รับบาดเจ็บจากการทำงาน","นายจ้างไม่จ่ายเงินเดือน","วีซ่าของฉันหมดอายุแล้ว","ฉันต้องไปโรงพยาบาลแต่พูดภาษาเกาหลีไม่ได้"],
  fil:["Nasaktan ako sa trabaho","Hindi nagbabayad ng sahod ang aking employer","Nag-expire na ang aking visa","Kailangan kong pumunta sa ospital pero hindi makapagsalita ng Korean"],
  si:["ජෝලිකරන විට තුවාල ලැබුණා","සේවා යෝජකයා ගෙවන්නේ නැහැ","මගේ වීසා ඉකුත් වෙලා","රෝහලට යන්නෙ ඕනෙ, නමුත් කොරියානු කතා කරන්න බැහැ"],
  km:["ខ្ញុំរងរបួសពេលធ្វើការ","ចៅហ្វាយមិនបង់ប្រាក់ខែ","ទិដ្ឋាការរបស់ខ្ញុំផុតហើយ","ខ្ញុំត្រូវទៅមន្ទីរពេទ្យប៉ុន្តែនិយាយភាសាកូរ៉េមិនបាន"],
  ne:["काममा चोट लाग्यो","मालिकले तलब दिँदैन","मेरो भिसा सकिएको छ","अस्पताल जानु छ तर कोरियन बोल्न सक्दिनँ"],
};
