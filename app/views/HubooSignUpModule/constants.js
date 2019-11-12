import Images from '../../images';

export const RegionCodes = {
  vi: 'vi',
  vi_en: 'vi_en',
  hk: 'hk',
  hk_en: 'hk_en',
  tw: 'tw',
  tw_en: 'tw_en',
  id: 'id',
  id_en: 'id_en',
};

export const CountryCodes = [
  {
    code: '+84',
    active: false,
    image: Images.hubooIconVietNam,
    countryKey: RegionCodes.vi,
    name: 'Viet Nam',
  },
  {
    code: '+84',
    active: false,
    image: Images.hubooIconVietNam,
    countryKey: RegionCodes.vi_en,
    name: 'Viet Nam',
  },
  {
    code: '+852',
    active: false,
    image: Images.hubooIconHongKong,
    countryKey: RegionCodes.hk,
    name: 'HongKong',
  },
  {
    code: '+852',
    active: false,
    image: Images.hubooIconHongKong,
    countryKey: RegionCodes.hk_en,
    name: 'HongKong',
  },
  {
    code: '+886',
    active: false,
    image: Images.hubooIconTaiwan,
    countryKey: RegionCodes.tw,
    name: 'Taiwan',
  },
  {
    code: '+886',
    active: false,
    image: Images.hubooIconTaiwan,
    countryKey: RegionCodes.tw_en,
    name: 'Taiwan',
  },
  {
    code: '+62',
    active: true,
    image: Images.hubooIconIndonesia,
    countryKey: RegionCodes.id,
    name: 'Indonesia',
  },
  {
    code: '+62',
    active: false,
    image: Images.hubooIconIndonesia,
    countryKey: RegionCodes.id_en,
    name: 'Indonesia',
  },
];
