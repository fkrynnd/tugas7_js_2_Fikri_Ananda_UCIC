class Gempa {
    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;
    }

    dampak(){
        let gempa;
        if(this.skala > 0 && this.skala <= 2) gempa = "Dampak Tidak Terasa";
        else if(this.skala > 2 && this.skala <= 4) gempa = "Bangunan Retak";
        else if(this.skala > 4 && this.skala <= 6) gempa = "Bangunan Roboh";
        else if(this.skala > 6) gempa = "Bangunan Roboh dan Berpotensi Tsunami";
        else gempa = "Tidak Terjadi Gempa";

        document.write(`
            <tbody><tr>
                <td>$(this.lokasi)</td>
                <td>$(this.skala)</td>
                <td>$(gempa)</td>
            </tr></tbody>
        `);
    }
}

let g1 = new Gempa('Hawai Region, Hawai', 3.2, this.gempa);
let g2 = new Gempa('Walker, California', 1.3, this.gempa);
let g3 = new Gempa('Itoman, Japan', 4.5, this.gempa);
let g4 = new Gempa('Kermadec Islands, New Zealand', 6.6, this.gempa);
let g5 = new Gempa('Singaparna, Indonesia', 4.9, this.gempa);
let g6 = new Gempa('Sand Point, Alaska', 3.2, this.gempa);
let g7 = new Gempa('Bukittinggi, Indonesia', 6.2, this.gempa);
let g8 = new Gempa('Adak, Alaska', 4, this.gempa);
let g9 = new Gempa('Jereme, Haiti', 4.6, this.gempa);
let g10 = new Gempa('Tolsona, Alaska', 1.3, this.gempa);