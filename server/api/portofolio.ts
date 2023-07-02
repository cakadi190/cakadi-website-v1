const data = [
    {
        id: 'cakadi-web',
        status: 'success',
        category: 'web',
        name: 'Personal Website Cak Adi',
        techStack: ['nuxtjs', 'tailwindcss', 'typescript', 'javascript', 'nodejs'],
        shortDesc: 'Ini adalah website personal milik Cak Adi (Saya Sendiri) untuk menampilkan semua informasi tentang diri saya pribadi.',
        image: '/images/portofolio/cakadi-home.png',
    },
    {
        id: 'sirus-intechfes',
        status: 'success',
        category: 'web',
        name: 'Landing Sirus (Sistem Informasi Rumah Sakit)',
        techStack: ['nuxtjs', 'bootstrap', 'javascript', 'nodejs'],
        shortDesc: 'Ini adalah website personal milik Cak Adi (Saya Sendiri) untuk menampilkan semua informasi tentang diri saya pribadi.',
        image: '/images/portofolio/cakadi-home.png',
    },
    {
        id: 'sideka-dkd',
        status: 'pending',
        category: 'web',
        name: 'Sistem Informasi Dewan Kerja',
        techStack: ['laravel', 'bootstrap', 'javascript', 'jquery'],
        shortDesc: 'Sistem Informasi untuk mengelola dan memonitor seluruh aktifitas kegiatan di Dewan Kerja seluruh Jawa Timur.',
        image: '/images/portofolio/sideka-front.png',
    },
    {
        id: 'ppdb-mahasiswa',
        status: 'success',
        category: 'web',
        name: 'PMB Eltibiz',
        techStack: ['laravel', 'bootstrap', 'javascript', 'jquery'],
        shortDesc: 'Sistem Website untuk mengelola Penerimaan Mahasiswa Baru, dan ini adalah proyek kolaborasi dengan tugas akhir seorang mahasiswa.',
        image: '/images/portofolio/ppdb-login.png',
    },
]

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    let datas: any = [];

    if(query.slug) datas = data.filter((data) => data.id === query.slug)
    else datas = data

    return datas;
})