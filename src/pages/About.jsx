import React from "react";

export const About = () => {
  return (
    <div className="about items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-40">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card justify-center items-center">
          <h1 className="text-5xl font-bold text-gray-950 dark:text-white mb-6">Tentang Kami</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">
            Kami adalah tim yang berdedikasi untuk memberikan solusi analisis sentimen yang akurat dan efisien. Dengan teknologi terkini, kami membantu Anda memahami opini publik dengan lebih baik.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-300 mb-6">Platform ini dirancang untuk menganalisis sentimen dari teks secara otomatis, membantu memahami opini atau perasaan yang terkandung dalam suatu teks.</p>
        </div>
        <div className="card justify-center items-center">
          <h1 className="text-5xl font-bold text-gray-950 dark:text-white mb-6 py-4">Kontak Kami</h1>
          <div className="input-group grid grid-cols-2 gap-4 py-4">
            <input type="text" placeholder="Nama" className="w-full max-w-xs mb-2 rounded py-2 pl-2 bg-transparent   dark:border-cyan-500 dark:shadow-[0_0_15px_#06b6d4] dark:focus:shadow-[0_0_20px_#06b6d4] text-gray-950 dark:text-white"/>
            <input type="email" placeholder="Nomor Telepon" className="input input-bordered border-gray-300 w-full max-w-xs mb-2 placeholder:indent-0.5 pl-2" />
          </div>
          <div className="input gap-4 py-4">
            <input type="email" placeholder="Email" className="input input-bordered border-gray-300 w-full max-w mb-2" />
          </div>
          <div className="input-group grid grid-cols-1 gap-4">
            <textarea placeholder="Pesan" className="textarea textarea-bordered border-gray-300 w-full max-w mb-2 col-auto" rows="4"></textarea>
            <button className="btn btn-primary bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-2xl">Kirim Pesan</button>
          </div>
        </div>
      </div>
    </div>
  );
};
