export type playerType = {
  impact: impactType
  strzal: {
    pol: shootType
    dob: shootType
    kon: shootType
    kar: shootType
  }
  straty: {
    pole: turnoverType
    dobijak: turnoverType
  }
  obrona: defenseType
  przewinienia: exclusionType
  nazwa: string
  numerZawodnika: number
  czasWejscia: string[]
  czasWyjscia: string[]
  sklad: boolean
  lawka: boolean
  czas: number
  _id: string
}

type impactType = {
  sprint: number
  asysta: number
  wywKarny: number
  wywWylotka: number
}

type shootType = {
  bramka: number
  naBramke: number
  pudlo: number
}
type turnoverType = {
  pilka: number
  kontrafaul: number
}

type defenseType = {
  blok: number
  przechwyt: number
  dobijak: number
  zalamanieObronne: number
}
type exclusionType = {
  wylotka: number
  dobijak: number
  karny: number
}

const defaultMatch: { _id: string; meczKod: string; date: string; zawodnik: playerType[] } = {
  _id: '',
  meczKod: '',
  date: '',
  zawodnik: [
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Benda',
      numerZawodnika: 1,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Nikita',
      numerZawodnika: 2,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Messan',
      numerZawodnika: 3,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Nera',
      numerZawodnika: 4,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Przemek',
      numerZawodnika: 5,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Madej',
      numerZawodnika: 6,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Grabek',
      numerZawodnika: 7,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Emil',
      numerZawodnika: 8,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Borek',
      numerZawodnika: 9,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Kiljan',
      numerZawodnika: 10,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Fifi',
      numerZawodnika: 11,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Andrzej',
      numerZawodnika: 12,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Elvis',
      numerZawodnika: 13,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: true,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Bar',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Denis',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Kitlo',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Roller',
      numerZawodnika: 1,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Targowski',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Wezu',
      numerZawodnika: 1,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Pyrek.jr',
      numerZawodnika: 1,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Idzi',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Franek',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Mamut',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Kajtek',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },

    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Jawor',
      numerZawodnika: 1,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Zbrzeski',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
    {
      impact: {
        sprint: 0,
        asysta: 0,
        wywKarny: 0,
        wywWylotka: 0,
      },
      strzal: {
        pol: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        dob: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kon: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
        kar: {
          bramka: 0,
          naBramke: 0,
          pudlo: 0,
        },
      },
      straty: {
        pole: {
          pilka: 0,
          kontrafaul: 0,
        },
        dobijak: {
          pilka: 0,
          kontrafaul: 0,
        },
      },
      obrona: {
        blok: 0,
        przechwyt: 0,
        dobijak: 0,
        zalamanieObronne: 0,
      },
      przewinienia: {
        wylotka: 0,
        dobijak: 0,
        karny: 0,
      },
      nazwa: 'Ozga',
      numerZawodnika: 0,
      czasWejscia: [],
      czasWyjscia: [],
      sklad: false,
      lawka: false,
      czas: 0,
      _id: '',
    },
  ],
}

export default defaultMatch
