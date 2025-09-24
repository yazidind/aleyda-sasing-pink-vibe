export interface Course {
  name: string;
  time: string;
  room: string;
  lecturer: string;
}

export interface DaySchedule {
  day: string;
  courses: Course[];
}

export const scheduleData: DaySchedule[] = [
  {
    day: "Senin",
    courses: [
      {
        name: "Sejarah Kesastraan Inggris",
        time: "09.00-10.30",
        room: "L. Hughes",
        lecturer: "Miss Fatimah & Pak/Bu Ridho"
      },
      {
        name: "Analisis Wacana",
        time: "10.30-12.00",
        room: "E. Spencer",
        lecturer: "Prof Bahri & Mr. Aries"
      }
    ]
  },
  {
    day: "Selasa",
    courses: [
      {
        name: "Metode Pengajaran Bahasa",
        time: "10.30-12.00",
        room: "L. Hughes",
        lecturer: "Ms. Eka & Mr. Rizki"
      },
      {
        name: "Perkembangan Bahasa Inggris",
        time: "12.45-14.15",
        room: "N. Chomsky",
        lecturer: "Ms. Fatimah & Pak/Bu Ridho"
      },
      {
        name: "Kajian Multikultur",
        time: "15.00-16.30",
        room: "G. Chaucer",
        lecturer: "Pak/Bu Nofriyan"
      }
    ]
  },
  {
    day: "Rabu",
    courses: [
      {
        name: "Teknologi Informasi dan Komunikasi",
        time: "07.30-09.00",
        room: "Algebra",
        lecturer: "Mr. Aries & Mr. Rizki"
      },
      {
        name: "Kesastraan Dunia",
        time: "10.30-12.00",
        room: "E. Spencer",
        lecturer: "Ms. Tiwi & Pak/Bu Agra"
      },
      {
        name: "Folklore dan Mitologi",
        time: "12.45-14.15",
        room: "E. Hemingway",
        lecturer: "Miss Wilma & Pak/Bu Ridho"
      }
    ]
  },
  {
    day: "Kamis",
    courses: [
      {
        name: "Penerjemahan Indonesia-Inggris",
        time: "12.45-14.15",
        room: "L Hughes",
        lecturer: "Miss Eka & Mr. Rizki"
      }
    ]
  }
];