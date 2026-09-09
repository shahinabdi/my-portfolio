export interface EducationItem {
  institution: string;
  degree: string;
  detail: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    institution: 'IASchool \u2013 Groupe GEMA',
    degree: 'Mast\u00e8re Chef de projet Data et Intelligence Artificielle',
    detail: 'RNCP niveau 7',
    period: '2020 \u2014 2022',
  },
  {
    institution: 'Observatoire de Paris-Meudon',
    degree: 'M1 SUTS / M2 OSAE',
    detail: 'Master en Astronomie et Astrophysique',
    period: '2017 \u2014 2020',
  },
];
