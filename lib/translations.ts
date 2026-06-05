export type LangCode = 'ko' | 'en' | 'zh' | 'vi' | 'mn' | 'id' | 'ms' | 'ru' | 'uz' | 'th' | 'fil' | 'si' | 'km' | 'ne';

export const LANGUAGES: { code: LangCode; name: string; flag: string; native: string }[] = [
  { code: 'ko', name: '한국어', flag: '🇰🇷', native: '한국어' },
  { code: 'en', name: 'English', flag: '🇺🇸', native: 'English' },
  { code: 'zh', name: '중국어', flag: '🇨🇳', native: '中文' },
  { code: 'vi', name: '베트남어', flag: '🇻🇳', native: 'Tiếng Việt' },
  { code: 'mn', name: '몽골어', flag: '🇲🇳', native: 'Монгол' },
  { code: 'id', name: '인도네시아어', flag: '🇮🇩', native: 'Bahasa Indonesia' },
  { code: 'ms', name: '말레이어', flag: '🇲🇾', native: 'Bahasa Melayu' },
  { code: 'ru', name: '러시아어', flag: '🇷🇺', native: 'Русский' },
  { code: 'uz', name: '우즈베크어', flag: '🇺🇿', native: "O'zbek" },
  { code: 'th', name: '태국어', flag: '🇹🇭', native: 'ภาษาไทย' },
  { code: 'fil', name: '필리핀어', flag: '🇵🇭', native: 'Filipino' },
  { code: 'si', name: '스리랑카어', flag: '🇱🇰', native: 'සිංහල' },
  { code: 'km', name: '캄보디아어', flag: '🇰🇭', native: 'ភាសាខ្មែរ' },
  { code: 'ne', name: '네팔어', flag: '🇳🇵', native: 'नेपाली' },
];

type T = Record<LangCode, string>;

export const UI: Record<string, T> = {
  selectLanguage: {
    ko: '언어를 선택하세요', en: 'Select your language', zh: '请选择语言', vi: 'Chọn ngôn ngữ',
    mn: 'Хэлээ сонгоно уу', id: 'Pilih bahasa Anda', ms: 'Pilih bahasa anda', ru: 'Выберите язык',
    uz: "Tilni tanlang", th: 'เลือกภาษา', fil: 'Piliin ang wika', si: 'භාෂාව තෝරන්න',
    km: 'ជ្រើសរើសភាសា', ne: 'भाषा छान्नुहोस्',
  },
  appDesc: {
    ko: '안산 외국인 주민을 위한\n안전·권리 정보 앱',
    en: 'Safety & Rights Info App\nfor Ansan Foreign Residents',
    zh: '为安山外国居民提供的\n安全和权利信息应用',
    vi: 'Ứng dụng thông tin an toàn\nvà quyền lợi cho cư dân nước ngoài tại Ansan',
    mn: 'Ансан хотын гадаадын оршин суугчдад\nзориулсан аюулгүй байдал, эрхийн мэдээллийн апп',
    id: 'Aplikasi Informasi Keselamatan & Hak\nuntuk Penduduk Asing Ansan',
    ms: 'Aplikasi Maklumat Keselamatan & Hak\nuntuk Penduduk Asing Ansan',
    ru: 'Приложение безопасности и прав\nдля иностранных жителей Ансана',
    uz: "Ansan chet el aholisi uchun\nhavfsizlik va huquq ma'lumot ilovasi",
    th: 'แอปข้อมูลความปลอดภัยและสิทธิ์\nสำหรับผู้อยู่อาศัยต่างชาติในอันซัน',
    fil: 'Safety & Rights Info App\npara sa mga Dayuhang Residente ng Ansan',
    si: 'අන්සාන් විදේශ පදිංචිකරුවන් සඳහා\nආරක්ෂාව සහ අයිතිවාසිකම් තොරතුරු යෙදුම',
    km: 'កម្មវិធីព័ត៌មានសុវត្ថិភាព & សិទ្ធិ\nសម្រាប់ជនបរទេសរស់នៅអានសាន',
    ne: 'अन्सान विदेशी बासिन्दाहरूका लागि\nसुरक्षा र अधिकार सूचना एप',
  },
  emergency: {
    ko: '긴급신고', en: 'Emergency', zh: '紧急', vi: 'Khẩn cấp',
    mn: 'Яаралтай', id: 'Darurat', ms: 'Kecemasan', ru: 'Экстренная',
    uz: 'Favqulodda', th: 'ฉุกเฉิน', fil: 'Emergency', si: 'හදිසි',
    km: 'បន្ទាន់', ne: 'आपतकालीन',
  },
  home: {
    ko: '홈', en: 'Home', zh: '首页', vi: 'Trang chủ',
    mn: 'Нүүр', id: 'Beranda', ms: 'Laman Utama', ru: 'Главная',
    uz: 'Bosh sahifa', th: 'หน้าหลัก', fil: 'Tahanan', si: 'මුල් පිටුව',
    km: 'ទំព័រដើម', ne: 'गृह',
  },
  chat: {
    ko: 'AI 상담', en: 'AI Chat', zh: 'AI咨询', vi: 'Tư vấn AI',
    mn: 'AI Зөвлөх', id: 'Konsultasi AI', ms: 'Soal Jawab AI', ru: 'ИИ Консультация',
    uz: 'AI Maslahat', th: 'ปรึกษา AI', fil: 'AI Konsulta', si: 'AI උපදෙස්',
    km: 'ប្រឹក្សា AI', ne: 'AI परामर्श',
  },
  safety: {
    ko: '안전', en: 'Safety', zh: '安全', vi: 'An toàn',
    mn: 'Аюулгүй байдал', id: 'Keselamatan', ms: 'Keselamatan', ru: 'Безопасность',
    uz: 'Xavfsizlik', th: 'ความปลอดภัย', fil: 'Kaligtasan', si: 'ආරක්ෂාව',
    km: 'សុវត្ថិភាព', ne: 'सुरक्षा',
  },
  medical: {
    ko: '의료', en: 'Medical', zh: '医疗', vi: 'Y tế',
    mn: 'Эрүүл мэнд', id: 'Medis', ms: 'Perubatan', ru: 'Медицина',
    uz: 'Tibbiyot', th: 'การแพทย์', fil: 'Medikal', si: 'වෛද්ය',
    km: 'វេជ្ជសាស្ត្រ', ne: 'चिकित्सा',
  },
  labor: {
    ko: '노동', en: 'Labor', zh: '劳动', vi: 'Lao động',
    mn: 'Хөдөлмөр', id: 'Tenaga Kerja', ms: 'Buruh', ru: 'Труд',
    uz: 'Mehnat', th: 'แรงงาน', fil: 'Paggawa', si: 'ශ්‍රමය',
    km: 'ការងារ', ne: 'श्रम',
  },
  legal: {
    ko: '법률', en: 'Legal', zh: '法律', vi: 'Pháp lý',
    mn: 'Хууль', id: 'Hukum', ms: 'Undang-undang', ru: 'Право',
    uz: 'Huquq', th: 'กฎหมาย', fil: 'Legal', si: 'නීතිය',
    km: 'ច្បាប់', ne: 'कानून',
  },
  industrial: {
    ko: '산재', en: 'Industrial Accident', zh: '工伤', vi: 'Tai nạn lao động',
    mn: 'Үйлдвэрийн осол', id: 'Kecelakaan Kerja', ms: 'Kemalangan Industri', ru: 'Проф. травма',
    uz: 'Ishlab chiqarish baxtsizligi', th: 'อุบัติเหตุงาน', fil: 'Aksidente sa Trabaho', si: 'කාර්මික අනතුර',
    km: 'គ្រោះថ្នាក់ការងារ', ne: 'औद्योगिक दुर्घटना',
  },
  callPolice: {
    ko: '경찰 신고 (112)', en: 'Call Police (112)', zh: '报警 (112)', vi: 'Gọi cảnh sát (112)',
    mn: 'Цагдаа дуудах (112)', id: 'Hubungi Polisi (112)', ms: 'Hubungi Polis (112)', ru: 'Полиция (112)',
    uz: 'Politsiya (112)', th: 'เรียกตำรวจ (112)', fil: 'Tumawag sa Pulis (112)', si: 'පොලිසිය (112)',
    km: 'ហៅប៉ូលីស (112)', ne: 'पुलिस बोलाउनुस् (112)',
  },
  callFire: {
    ko: '소방·구급 (119)', en: 'Fire & Ambulance (119)', zh: '消防救护 (119)', vi: 'Cứu hỏa & Cấp cứu (119)',
    mn: 'Гал унтраах (119)', id: 'Pemadam & Ambulans (119)', ms: 'Bomba & Ambulans (119)', ru: 'Пожар и скорая (119)',
    uz: "O't o'chirish (119)", th: 'ดับเพลิง & รถพยาบาล (119)', fil: 'Bumbero at Ambulansya (119)', si: 'ගිනිනිවීම (119)',
    km: 'ពន្លត់ភ្លើង (119)', ne: 'दमकल (119)',
  },
  multilingualPolice: {
    ko: '외국어 경찰신고 (1588-0112)', en: 'Multilingual Police (1588-0112)',
    zh: '多语言报警 (1588-0112)', vi: 'Báo cảnh sát đa ngôn ngữ (1588-0112)',
    mn: 'Олон хэлт цагдаа (1588-0112)', id: 'Polisi multibahasa (1588-0112)',
    ms: 'Polis pelbagai bahasa (1588-0112)', ru: 'Многоязычная полиция (1588-0112)',
    uz: 'Ko\'p tilli politsiya (1588-0112)', th: 'ตำรวจหลายภาษา (1588-0112)',
    fil: 'Multilinggwal na Pulis (1588-0112)', si: 'බහු භාෂා පොලිසිය (1588-0112)',
    km: 'ប៉ូលីសពហុភាសា (1588-0112)', ne: 'बहुभाषी पुलिस (1588-0112)',
  },
  ansanCenter: {
    ko: '안산시 외국인주민 상담센터 (1644-7111)',
    en: 'Ansan Foreign Residents Support Center (1644-7111)',
    zh: '安山外国居民咨询中心 (1644-7111)',
    vi: 'Trung tâm hỗ trợ cư dân nước ngoài Ansan (1644-7111)',
    mn: 'Ансан хотын гадаадын иргэдийн зөвлөх төв (1644-7111)',
    id: 'Pusat Dukungan Warga Asing Ansan (1644-7111)',
    ms: 'Pusat Sokongan Warga Asing Ansan (1644-7111)',
    ru: 'Центр поддержки иностранцев Ансана (1644-7111)',
    uz: 'Ansan chet el fuqarolari qo\'llab-quvvatlash markazi (1644-7111)',
    th: 'ศูนย์สนับสนุนผู้อยู่อาศัยต่างชาติ Ansan (1644-7111)',
    fil: 'Ansan Foreign Residents Support Center (1644-7111)',
    si: 'Ansan විදේශ පදිංචිකරුවන් සහාය මධ්‍යස්ථානය (1644-7111)',
    km: 'មជ្ឈមណ្ឌលគាំទ្រជនបរទេស អានសាន (1644-7111)',
    ne: 'अन्सान विदेशी बासिन्दा सहायता केन्द्र (1644-7111)',
  },
  foreignInfo: {
    ko: '외국인종합안내센터 (1345)', en: 'Korea Immigration Service Center (1345)',
    zh: '外国人综合咨询中心 (1345)', vi: 'Trung tâm thông tin người nước ngoài (1345)',
    mn: 'Гадаадын иргэдийн мэдээллийн төв (1345)', id: 'Pusat Informasi Orang Asing (1345)',
    ms: 'Pusat Maklumat Orang Asing (1345)', ru: 'Информационный центр для иностранцев (1345)',
    uz: 'Xorijliklar uchun axborot markazi (1345)', th: 'ศูนย์ข้อมูลสำหรับชาวต่างชาติ (1345)',
    fil: 'Korea Immigration Service Center (1345)', si: 'විදේශිකයන් සඳහා තොරතුරු මධ්‍යස්ථානය (1345)',
    km: 'មជ្ឈមណ្ឌលព័ត៌មានសម្រាប់ជនបរទេស (1345)', ne: 'विदेशीहरूका लागि सूचना केन्द्र (1345)',
  },
  shareLocation: {
    ko: '내 위치 공유하기', en: 'Share My Location', zh: '分享我的位置', vi: 'Chia sẻ vị trí của tôi',
    mn: 'Байршлаа хуваалцах', id: 'Bagikan Lokasi Saya', ms: 'Kongsi Lokasi Saya', ru: 'Поделиться местоположением',
    uz: 'Mening joylashuvimni ulashish', th: 'แชร์ตำแหน่งของฉัน', fil: 'Ibahagi ang Aking Lokasyon', si: 'මගේ ස්ථානය බෙදා ගන්න',
    km: 'ចែករំលែកទីតាំងរបស់ខ្ញុំ', ne: 'मेरो स्थान साझा गर्नुस्',
  },
  emergencyPhrases: {
    ko: '긴급 신고 문장', en: 'Emergency Phrases', zh: '紧急报告短语', vi: 'Cụm từ khẩn cấp',
    mn: 'Яаралтай хэллэг', id: 'Frasa Darurat', ms: 'Frasa Kecemasan', ru: 'Экстренные фразы',
    uz: 'Favqulodda iboralar', th: 'ประโยคฉุกเฉิน', fil: 'Emergency Phrases', si: 'හදිසි වාක්‍ය',
    km: 'ឃ្លាបន្ទាន់', ne: 'आपतकालीन वाक्यांश',
  },
  wageCalc: {
    ko: '월급 계산기', en: 'Wage Calculator', zh: '工资计算器', vi: 'Máy tính lương',
    mn: 'Цалин тооцоолуур', id: 'Kalkulator Gaji', ms: 'Kalkulator Gaji', ru: 'Калькулятор зарплаты',
    uz: 'Maosh kalkulyatori', th: 'เครื่องคำนวณค่าจ้าง', fil: 'Wage Calculator', si: 'වැටුප් කැල්කියුලේටරය',
    km: 'ម៉ាស៊ីនគណនាប្រាក់ឈ្នួល', ne: 'तलब क्याल्कुलेटर',
  },
  laborLaw: {
    ko: '노동법 안내', en: 'Labor Law Guide', zh: '劳动法指南', vi: 'Hướng dẫn luật lao động',
    mn: 'Хөдөлмөрийн хуулийн гарын авлага', id: 'Panduan Hukum Ketenagakerjaan', ms: 'Panduan Undang-undang Buruh',
    ru: 'Руководство по трудовому праву', uz: 'Mehnat qonuni qo\'llanmasi', th: 'คู่มือกฎหมายแรงงาน',
    fil: 'Labor Law Guide', si: 'ශ්‍රම නීති මාර්ගෝපදේශය', km: 'មគ្គុទ្ទេសក៍ច្បាប់ការងារ', ne: 'श्रम कानून मार्गदर्शन',
  },
  wageTheft: {
    ko: '임금체불 신고', en: 'Report Wage Theft', zh: '举报欠薪', vi: 'Báo cáo nợ lương',
    mn: 'Цалин хурамтлалыг мэдээлэх', id: 'Laporkan Pencurian Upah', ms: 'Laporkan Kecurian Upah',
    ru: 'Сообщить о задержке зарплаты', uz: 'Ish haqi kechiktirishni bildirish', th: 'รายงานการค้างค่าจ้าง',
    fil: 'I-ulat ang Wage Theft', si: 'වැටුප් සොරකම වාර්තා කරන්න', km: 'រាយការណ៍ការលួចប្រាក់ឈ្នួល', ne: 'ज्याला चोरी रिपोर्ट गर्नुस्',
  },
  typeMessage: {
    ko: '상황을 입력하세요...', en: 'Describe your situation...', zh: '请描述您的情况...',
    vi: 'Mô tả tình huống của bạn...', mn: 'Нөхцөл байдлаа тайлбарлана уу...',
    id: 'Ceritakan situasi Anda...', ms: 'Terangkan situasi anda...', ru: 'Опишите ситуацию...',
    uz: 'Vaziyatingizni tasvirlab bering...', th: 'อธิบายสถานการณ์ของคุณ...',
    fil: 'Ilarawan ang iyong sitwasyon...', si: 'ඔබේ තත්ත්වය විස්තර කරන්න...',
    km: 'ពិពណ៌នាស្ថានការណ៍របស់អ្នក...', ne: 'आफ्नो अवस्था वर्णन गर्नुस्...',
  },
  send: {
    ko: '전송', en: 'Send', zh: '发送', vi: 'Gửi', mn: 'Илгээх', id: 'Kirim', ms: 'Hantar',
    ru: 'Отправить', uz: 'Yuborish', th: 'ส่ง', fil: 'Ipadala', si: 'යවන්න', km: 'ផ្ញើ', ne: 'पठाउनुस्',
  },
  aiDisclaimer: {
    ko: 'AI 답변은 참고용입니다. 정확한 판단은 전문 상담원에게 문의하세요.',
    en: 'AI answers are for reference only. Consult a professional for accurate advice.',
    zh: 'AI回答仅供参考。请咨询专业顾问以获得准确建议。',
    vi: 'Câu trả lời AI chỉ để tham khảo. Tham khảo chuyên gia để được tư vấn chính xác.',
    mn: 'AI хариулт зөвхөн лавлагааны зориулалттай. Нарийвчилсан зөвлөгөөний хувьд мэргэжлийн хүнтэй зөвлөлдөөрэй.',
    id: 'Jawaban AI hanya untuk referensi. Konsultasikan kepada profesional untuk saran yang akurat.',
    ms: 'Jawapan AI adalah untuk rujukan sahaja. Rujuk profesional untuk nasihat yang tepat.',
    ru: 'Ответы ИИ носят справочный характер. Для точного совета обратитесь к специалисту.',
    uz: "AI javoblari faqat ma'lumotnoma uchun. To'g'ri maslahat uchun mutaxassisga murojaat qiling.",
    th: 'คำตอบ AI เพื่อการอ้างอิงเท่านั้น ปรึกษาผู้เชี่ยวชาญเพื่อคำแนะนำที่แม่นยำ',
    fil: 'Ang mga sagot ng AI ay para sa sanggunian lamang. Kumunsulta sa isang propesyonal.',
    si: 'AI පිළිතුරු යොමු කිරීම සඳහා පමණි. නිවැරදි උපදෙස් සඳහා වෘත්තිකයෙකුගෙන් විමසන්න.',
    km: 'ចម្លើយ AI គឺសម្រាប់ឯកសារយោងតែប៉ុណ្ណោះ។ ពិគ្រោះជាមួយអ្នកជំនាញ។',
    ne: 'AI उत्तरहरू सन्दर्भका लागि मात्र हुन्। सटीक सल्लाहको लागि विशेषज्ञसँग परामर्श गर्नुस्।',
  },
  industrialAccidentGuide: {
    ko: '산재 신청 가이드', en: 'Industrial Accident Guide', zh: '工伤申请指南', vi: 'Hướng dẫn tai nạn lao động',
    mn: 'Үйлдвэрийн ослын гарын авлага', id: 'Panduan Kecelakaan Kerja', ms: 'Panduan Kemalangan Industri',
    ru: 'Руководство по проф. травме', uz: 'Ishlab chiqarish baxtsizligi qo\'llanmasi', th: 'คู่มืออุบัติเหตุงาน',
    fil: 'Industrial Accident Guide', si: 'කාර්මික අනතුර මාර්ගෝපදේශය', km: 'មគ្គុទ្ទេសក៍គ្រោះថ្នាក់ការងារ', ne: 'औद्योगिक दुर्घटना मार्गदर्शन',
  },
  reportAccident: {
    ko: '산재 신고 연결', en: 'Report Industrial Accident', zh: '工伤举报', vi: 'Báo cáo tai nạn lao động',
    mn: 'Үйлдвэрийн осол мэдээлэх', id: 'Laporkan Kecelakaan Kerja', ms: 'Laporkan Kemalangan Industri',
    ru: 'Сообщить о проф. травме', uz: 'Ishlab chiqarish baxtsizligini bildirish', th: 'รายงานอุบัติเหตุงาน',
    fil: 'I-ulat ang Aksidente sa Trabaho', si: 'කාර්මික අනතුර වාර්තා කරන්න', km: 'រាយការណ៍គ្រោះថ្នាក់ការងារ', ne: 'औद्योगिक दुर्घटना रिपोर्ट',
  },
  workplaceSafety: {
    ko: '산업현장 안전가이드', en: 'Workplace Safety Guide', zh: '工作场所安全指南', vi: 'Hướng dẫn an toàn tại nơi làm việc',
    mn: 'Ажлын байрны аюулгүй байдлын гарын авлага', id: 'Panduan Keselamatan Tempat Kerja', ms: 'Panduan Keselamatan Tempat Kerja',
    ru: 'Руководство по безопасности на рабочем месте', uz: 'Ish joyi xavfsizligi qo\'llanmasi', th: 'คู่มือความปลอดภัยในที่ทำงาน',
    fil: 'Workplace Safety Guide', si: 'කාර්යාල ආරක්ෂා මාර්ගෝපදේශය', km: 'មគ្គុទ្ទេសក៍សុវត្ថិភាពការងារ', ne: 'कार्यस्थल सुरक्षा मार्गदर्शन',
  },
  hospitalSearch: {
    ko: '다국어 병원 안내', en: 'Hospital Search', zh: '多语言医院指南', vi: 'Tìm kiếm bệnh viện',
    mn: 'Эмнэлэг хайх', id: 'Pencarian Rumah Sakit', ms: 'Carian Hospital', ru: 'Поиск больниц',
    uz: 'Kasalxona qidirish', th: 'ค้นหาโรงพยาบาล', fil: 'Paghanap ng Ospital', si: 'රෝහල් සෙවුම',
    km: 'ស្វែងរកមន្ទីរពេទ្យ', ne: 'अस्पताल खोज',
  },
  medicalInterpreter: {
    ko: '의료 통역 지원', en: 'Medical Interpreter', zh: '医疗口译支持', vi: 'Hỗ trợ phiên dịch y tế',
    mn: 'Эмнэлгийн орчуулагч', id: 'Penerjemah Medis', ms: 'Penterjemah Perubatan', ru: 'Медицинский переводчик',
    uz: 'Tibbiy tarjimon', th: 'ล่ามการแพทย์', fil: 'Medical Interpreter', si: 'වෛද්ය පරිවර්තකය',
    km: 'អ្នកបកប្រែពេទ្យ', ne: 'चिकित्सा अनुवादक',
  },
  legalGuide: {
    ko: '상황별 법률 가이드', en: 'Legal Guide by Situation', zh: '按情况分类的法律指南', vi: 'Hướng dẫn pháp lý theo tình huống',
    mn: 'Нөхцөл байдлаар хуулийн гарын авлага', id: 'Panduan Hukum per Situasi', ms: 'Panduan Undang-undang Mengikut Situasi',
    ru: 'Правовой гид по ситуациям', uz: 'Vaziyat bo\'yicha huquqiy qo\'llanma', th: 'คู่มือกฎหมายตามสถานการณ์',
    fil: 'Legal Guide ayon sa Sitwasyon', si: 'තත්ත්වය අනුව නීතිමය මාර්ගෝපදේශය', km: 'មគ្គុទ្ទេសក៍ច្បាប់តាមស្ថានភាព', ne: 'परिस्थिति अनुसार कानूनी मार्गदर्शन',
  },
  legalConsult: {
    ko: '다국어 법률상담', en: 'Multilingual Legal Consultation', zh: '多语言法律咨询', vi: 'Tư vấn pháp lý đa ngôn ngữ',
    mn: 'Олон хэлт хуулийн зөвлөгөө', id: 'Konsultasi Hukum Multibahasa', ms: 'Perundingan Undang-undang Pelbagai Bahasa',
    ru: 'Многоязычная юридическая консультация', uz: 'Ko\'p tilli huquqiy maslahat', th: 'ให้คำปรึกษาทางกฎหมายหลายภาษา',
    fil: 'Multilingual Legal Consultation', si: 'බහු භාෂා නීතිමය උපදේශනය', km: 'ការប្រឹក្សាផ្នែកច្បាប់ពហុភាសា', ne: 'बहुभाषी कानूनी परामर्श',
  },
  copy: {
    ko: '복사', en: 'Copy', zh: '复制', vi: 'Sao chép', mn: 'Хуулах', id: 'Salin', ms: 'Salin',
    ru: 'Копировать', uz: 'Nusxa olish', th: 'คัดลอก', fil: 'Kopyahin', si: 'පිටපත් කරන්න', km: 'ចម្លង', ne: 'कपी गर्नुस्',
  },
  copied: {
    ko: '복사됨!', en: 'Copied!', zh: '已复制!', vi: 'Đã sao chép!', mn: 'Хуулагдлаа!', id: 'Disalin!', ms: 'Disalin!',
    ru: 'Скопировано!', uz: 'Nusxa olindi!', th: 'คัดลอกแล้ว!', fil: 'Nakopya!', si: 'පිටපත් කරන ලදී!', km: 'បានចម្លង!', ne: 'कपी भयो!',
  },
};

// "Language selector available at top right of this website" in each language
export const LANG_SELECTOR_NOTE: Partial<Record<LangCode, string>> = {
  en: '💡 Language selector available at the top right of this site',
  zh: '💡 网站右上角可选择语言',
  vi: '💡 Có thể chọn ngôn ngữ ở góc trên bên phải của trang web',
  mn: '💡 Вэбсайтын баруун дээд буланд хэлийг сонгох боломжтой',
  id: '💡 Pilihan bahasa tersedia di pojok kanan atas situs web ini',
  ms: '💡 Pemilih bahasa tersedia di bahagian kanan atas laman web ini',
  ru: '💡 Выбор языка доступен в правом верхнем углу сайта',
  uz: "💡 Saytning o'ng yuqori burchagida til tanlash mavjud",
  th: '💡 เลือกภาษาได้ที่มุมขวาบนของเว็บไซต์',
  fil: '💡 May pagpipilian ng wika sa kanang sulok sa itaas ng website',
  si: '💡 වෙබ් අඩවියේ ඉහළ දකුණු කෙළවරේ භාෂා තේරීම ලබා ගත හැකිය',
  km: '💡 អាចជ្រើសរើសភាសានៅជ្រុងខាងស្តាំខាងលើនៃគេហទំព័រ',
  ne: '💡 वेबसाइटको माथिल्लो दायाँ कुनामा भाषा चयन उपलब्ध छ',
};

export function t(key: string, lang: LangCode): string {
  return UI[key]?.[lang] ?? UI[key]?.['en'] ?? key;
}

// 언어별 인사말
export const GREETINGS: Record<LangCode, string> = {
  ko: "○○○님, 환영해요!\n사용할 언어를\n선택해주세요.",
  en: "Welcome, ○○○!\nPlease select\nyour language.",
  zh: "○○○，欢迎您！\n请选择\n您使用的语言。",
  vi: "Chào mừng ○○○!\nVui lòng chọn\nngôn ngữ của bạn.",
  mn: "○○○, тавтай морил!\nХэлээ\nсонгоно уу.",
  id: "Selamat datang, ○○○!\nSilakan pilih\nbahasa Anda.",
  ms: "Selamat datang, ○○○!\nSila pilih\nbahasa anda.",
  ru: "Добро пожаловать, ○○○!\nПожалуйста, выберите\nваш язык.",
  uz: "Xush kelibsiz, ○○○!\nIltimos, tilingizni\ntanlang.",
  th: "ยินดีต้อนรับ ○○○!\nกรุณาเลือก\nภาษาที่คุณใช้",
  fil: "Maligayang pagdating, ○○○!\nMangyaring piliin\nang iyong wika.",
  si: "○○○, සාදරයෙන් පිළිගනිමු!\nකරුණාකර ඔබේ\nභාෂාව තෝරන්න.",
  km: "ស្វាគមន៍ ○○○!\nសូមជ្រើសរើស\nភាសារបស់អ្នក។",
  ne: "○○○, स्वागत छ!\nकृपया आफ्नो\nभाषा छान्नुहोस्।",
};

// 시작하기 버튼 번역
export const START_BTN: Record<LangCode, string> = {
  ko: "시작하기", en: "Get Started", zh: "开始使用", vi: "Bắt đầu",
  mn: "Эхлэх", id: "Mulai", ms: "Mula", ru: "Начать",
  uz: "Boshlash", th: "เริ่มต้น", fil: "Magsimula", si: "ආරම්භ කරන්න",
  km: "ចាប់ផ្តើម", ne: "सुरु गर्नुस्",
};

export const TO_MOBILE_VIEW: Record<LangCode, string> = {
  ko:"모바일 뷰로 전환", en:"Switch to Mobile View", zh:"切换到手机视图", vi:"Chuyển sang chế độ di động",
  mn:"Гар утасны харагдац руу шилжих", id:"Beralih ke Tampilan Mobile", ms:"Tukar ke Paparan Mudah Alih",
  ru:"Переключить на мобильный вид", uz:"Mobil ko'rinishga o'tish", th:"เปลี่ยนเป็นมุมมองมือถือ",
  fil:"Lumipat sa Mobile View", si:"ජංගම දර්ශනයට මාරු වන්න", km:"ប្តូរទៅទិដ្ឋភាពទូរស័ព្ទ", ne:"मोबाइल दृश्यमा जानुस्",
};

export const TO_PC_VIEW: Record<LangCode, string> = {
  ko:"PC 뷰로 전환", en:"Switch to PC View", zh:"切换到电脑视图", vi:"Chuyển sang chế độ máy tính",
  mn:"Компьютерийн харагдац руу шилжих", id:"Beralih ke Tampilan PC", ms:"Tukar ke Paparan PC",
  ru:"Переключить на вид ПК", uz:"PC ko'rinishga o'tish", th:"เปลี่ยนเป็นมุมมอง PC",
  fil:"Lumipat sa PC View", si:"PC දර්ශනයට මාරු වන්න", km:"ប្តូរទៅទិដ្ឋភាព PC", ne:"PC दृश्यमा जानुस्",
};

// 긴급 문장 4개 전 언어 번역
export const EMERGENCY_PHRASES: {
  id: string;
  ko: string;
  translations: Partial<Record<LangCode, string>>;
}[] = [
  {
    id: "need_ambulance",
    ko: "구급차가 필요합니다. 제 위치는 [위치]입니다.",
    translations: {
      en: "I need an ambulance. My location is [location].",
      zh: "我需要救护车。我的位置是[位置]。",
      vi: "Tôi cần xe cứu thương. Vị trí của tôi là [vị trí].",
      mn: "Надад түргэн тусламжийн машин хэрэгтэй. Миний байршил [байршил].",
      id: "Saya butuh ambulans. Lokasi saya di [lokasi].",
      ms: "Saya memerlukan ambulans. Lokasi saya di [lokasi].",
      ru: "Мне нужна скорая помощь. Моё местоположение: [местоположение].",
      uz: "Menga tez yordam kerak. Mening joylashuvim [joylashuv].",
      th: "ฉันต้องการรถพยาบาล ตำแหน่งของฉันคือ [ตำแหน่ง]",
      fil: "Kailangan ko ng ambulansya. Ang aking lokasyon ay [lokasyon].",
      si: "මට ගිලන් රථයක් අවශ්‍යයි. මගේ පිහිටීම [පිහිටීම].",
      km: "ខ្ញុំត្រូវការរថយន្តសង្គ្រោះ។ ទីតាំងរបស់ខ្ញុំគឺ [ទីតាំង]។",
      ne: "मलाई एम्बुलेन्स चाहिन्छ। मेरो स्थान [स्थान] हो।",
    },
  },
  {
    id: "fire",
    ko: "불이 났습니다.",
    translations: {
      en: "There is a fire.",
      zh: "发生火灾了。",
      vi: "Có hỏa hoạn.",
      mn: "Гал гарлаа.",
      id: "Ada kebakaran.",
      ms: "Ada kebakaran.",
      ru: "Пожар!",
      uz: "Yong'in chiqdi.",
      th: "เกิดเพลิงไหม้",
      fil: "May sunog.",
      si: "ගිනි ගනී.",
      km: "មានអណ្តាតភ្លើង។",
      ne: "आगो लागेको छ।",
    },
  },
  {
    id: "assault",
    ko: "폭행을 당하고 있습니다. 도와주세요.",
    translations: {
      en: "I am being assaulted. Please help me.",
      zh: "我正在遭受袭击。请帮助我。",
      vi: "Tôi đang bị tấn công. Xin hãy giúp tôi.",
      mn: "Намайг довтолж байна. Туслаач.",
      id: "Saya sedang diserang. Tolong bantu saya.",
      ms: "Saya sedang diserang. Tolong bantu saya.",
      ru: "На меня нападают. Пожалуйста, помогите.",
      uz: "Menga hujum qilinmoqda. Iltimos, yordam bering.",
      th: "ฉันกำลังถูกทำร้าย กรุณาช่วยด้วย",
      fil: "Inaatake ako. Pakitulungan ako.",
      si: "මට පහරදෙනවා. කරුණාකර මට උදව් කරන්න.",
      km: "ខ្ញុំកំពុងត្រូវបានវាយប្រហារ។ សូមជួយខ្ញុំផង។",
      ne: "मलाई आक्रमण गरिदैछ। कृपया मलाई मद्दत गर्नुस्।",
    },
  },
  {
    id: "accident",
    ko: "교통사고가 났습니다.",
    translations: {
      en: "There has been a traffic accident.",
      zh: "发生了交通事故。",
      vi: "Đã xảy ra tai nạn giao thông.",
      mn: "Замын осол гарлаа.",
      id: "Telah terjadi kecelakaan lalu lintas.",
      ms: "Telah berlaku kemalangan jalan raya.",
      ru: "Произошла дорожно-транспортная авария.",
      uz: "Yo'l-transport hodisasi yuz berdi.",
      th: "เกิดอุบัติเหตุทางถนน",
      fil: "Nagkaroon ng aksidente sa trapiko.",
      si: "රථවාහන අනතුරක් සිදු විය.",
      km: "មានគ្រោះថ្នាក់ចរាចរណ៍។",
      ne: "यातायात दुर्घटना भयो।",
    },
  },
];

export function getEmergencyPhrase(phraseId: string, lang: LangCode): { native: string; ko: string } {
  const phrase = EMERGENCY_PHRASES.find(p => p.id === phraseId);
  if (!phrase) return { native: "", ko: "" };
  return {
    native: lang === 'ko' ? phrase.ko : (phrase.translations[lang] ?? phrase.translations.en ?? phrase.ko),
    ko: phrase.ko,
  };
}

// 홈 화면 서비스 설명 전 언어
export const SERVICE_DESC: Record<string, Partial<Record<LangCode, string>>> = {
  safety: {
    ko: "미리 안전 사고를\n예방하고 대응해요.",
    en: "Prevent and respond\nto safety accidents.",
    zh: "预防和应对\n安全事故。",
    vi: "Phòng ngừa và ứng\nphó tai nạn an toàn.",
    mn: "Аюулгүй байдлын\nосолоос урьдчилан сэргийлэх.",
    id: "Mencegah dan\nmerespons kecelakaan.",
    ms: "Mencegah dan\nmenangani kemalangan.",
    ru: "Предотвращение и\nреагирование на аварии.",
    uz: "Xavfsizlik hodisalarini\noldini olish.",
    th: "ป้องกันและรับมือ\nอุบัติเหตุด้านความปลอดภัย",
    fil: "Pigilan at tugunan\nang mga aksidente.",
    si: "ආරක්ෂිත අනතුරු\nවළක්වා ගන්න.",
    km: "ការពារ​និង​ឆ្លើយ​តប\nគ្រោះថ្នាក់​សុវត្ថិភាព។",
    ne: "सुरक्षा दुर्घटना\nरोक्नुस् र प्रतिक्रिया गर्नुस्।",
  },
  medical: {
    ko: "병원, 응급 정보를\n제공해요.",
    en: "Hospital and\nemergency info.",
    zh: "提供医院和\n急救信息。",
    vi: "Thông tin bệnh viện\nvà cấp cứu.",
    mn: "Эмнэлэг, яаралтай\nтусламжийн мэдээлэл.",
    id: "Info rumah sakit\ndan darurat.",
    ms: "Maklumat hospital\ndan kecemasan.",
    ru: "Информация о больнице\nи скорой помощи.",
    uz: "Kasalxona va\nshoshilinch yordam.",
    th: "ข้อมูลโรงพยาบาล\nและฉุกเฉิน",
    fil: "Impormasyon sa\nospital at emergency.",
    si: "රෝහල් සහ\nහදිසි තොරතුරු.",
    km: "ព័ត៌មានមន្ទីរពេទ្យ\nនិងករណីបន្ទាន់។",
    ne: "अस्पताल र\nआपतकालीन जानकारी।",
  },
  labor: {
    ko: "근로자의 권리 정보를\n제공해요.",
    en: "Worker rights\ninformation.",
    zh: "提供劳工权利\n信息。",
    vi: "Thông tin quyền\nlợi người lao động.",
    mn: "Ажилчдын эрхийн\nмэдээлэл.",
    id: "Informasi hak\npekerja.",
    ms: "Maklumat hak\npekerja.",
    ru: "Информация о правах\nработников.",
    uz: "Ishchi huquqlari\nhaqida ma'lumot.",
    th: "ข้อมูลสิทธิ์\nของแรงงาน",
    fil: "Impormasyon sa\nkarapatan ng manggagawa.",
    si: "කම්කරු අයිතිවාසිකම්\nතොරතුරු.",
    km: "ព័ត៌មានសិទ្ធិ\nកម្មករ។",
    ne: "श्रमिक अधिकार\nजानकारी।",
  },
  legal: {
    ko: "법률과 관련해\n상담하고 지원해요.",
    en: "Legal consultation\nand support.",
    zh: "提供法律咨询\n和支持。",
    vi: "Tư vấn và hỗ\ntrợ pháp lý.",
    mn: "Хуулийн зөвлөгөө\nба дэмжлэг.",
    id: "Konsultasi dan\ndukungan hukum.",
    ms: "Perundingan dan\nsokongan undang-undang.",
    ru: "Юридическая консультация\nи поддержка.",
    uz: "Huquqiy maslahat\nva yordam.",
    th: "ปรึกษาและสนับสนุน\nด้านกฎหมาย",
    fil: "Legal na konsultasyon\nat suporta.",
    si: "නීතිමය උපදෙස්\nසහ සහාය.",
    km: "ការប្រឹក្សា​ច្បាប់\nនិង​ការ​គាំទ្រ។",
    ne: "कानूनी परामर्श\nर सहयोग।",
  },
  industrial: {
    ko: "산재 신청 및 보상에\n대한 정보를 제공해요.",
    en: "Industrial accident\nclaims & compensation.",
    zh: "提供工伤申请\n和赔偿信息。",
    vi: "Thông tin bồi thường\ntai nạn lao động.",
    mn: "Үйлдвэрийн ослын\ннэхэмжлэл, нөхөн олговор.",
    id: "Info klaim kecelakaan\nkerja & kompensasi.",
    ms: "Maklumat tuntutan\nkemalangan industri.",
    ru: "Информация о\npроф. травме и компенсации.",
    uz: "Ishlab chiqarish\nbaxtsizligi bo'yicha.",
    th: "ข้อมูลการเรียกร้อง\nอุบัติเหตุจากการทำงาน",
    fil: "Impormasyon sa industrial\naccident claims.",
    si: "කාර්මික අනතුරු\nකොමිස් සහ වන්දි.",
    km: "ព័ត៌មានការទាម​ទារ\nគ្រោះ​ថ្នាក់​ការ​ងារ។",
    ne: "औद्योगिक दुर्घटना\nदाबी र क्षतिपूर्ति।",
  },
};

// 홈 화면 서비스 선택 안내 문구
export const SELECT_SERVICE: Record<LangCode, string> = {
  ko: "필요한 서비스를\n선택하세요!",
  en: "Select the service\nyou need!",
  zh: "请选择您需要的\n服务！",
  vi: "Chọn dịch vụ\nbạn cần!",
  mn: "Хэрэгтэй үйлчилгээгээ\nсонгоно уу!",
  id: "Pilih layanan\nyang Anda butuhkan!",
  ms: "Pilih perkhidmatan\nyang anda perlukan!",
  ru: "Выберите нужную\nвам услугу!",
  uz: "Kerakli xizmatni\ntanlang!",
  th: "เลือกบริการ\nที่คุณต้องการ!",
  fil: "Piliin ang serbisyo\nna kailangan mo!",
  si: "ඔබට අවශ්‍ය සේවාව\nතෝරන්න!",
  km: "ជ្រើសរើស​សេវា​\nដែល​អ្នក​ត្រូវ​ការ!",
  ne: "तपाईंलाई चाहिने\nसेवा छान्नुस्!",
};

export const GOOGLE_TRANSLATE_LANGS: Record<LangCode, string> = {
  ko: 'ko', en: 'en', zh: 'zh-CN', vi: 'vi', mn: 'mn', id: 'id', ms: 'ms',
  ru: 'ru', uz: 'uz', th: 'th', fil: 'tl', si: 'si', km: 'km', ne: 'ne',
};

export function translateUrl(url: string, lang: LangCode): string {
  return url;
}

// Returns a Google Translate link for the page (open separately)
export function googleTranslateUrl(url: string, lang: LangCode): string {
  const tl = GOOGLE_TRANSLATE_LANGS[lang];
  return `https://translate.google.com/translate?sl=ko&tl=${tl}&u=${encodeURIComponent(url)}`;
}
