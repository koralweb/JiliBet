const broadcastsList = [
  {
    time: '02:00',
    team1: 'Newcastle',
    team2: 'Aston Villa',
    liga: 'Premier League Summer Series',
    date: 22,
  },
  {
    time: '09:00',
    team1: 'Italy (W)',
    team2: 'Argentina (W)',
    liga: 'FIFA World Cup (W)',
    date: 22,
  },
  {
    time: '11:30',
    team1: 'Germany (W)',
    team2: 'Morocco (W)',
    liga: 'FIFA World Cup (W)',
    date: 22,
  },
  {
    time: '14:00',
    team1: 'Brazil (W)',
    team2: 'Panama (W)',
    liga: 'FIFA World Cup (W)',
    date: 22,
  },
  {
    time: '14:00',
    team1: 'G Furth',
    team2: 'Liverpool',
    liga: 'Friendly',
    date: 22,
  },
  {
    time: '16:30',
    team1: 'West Indies',
    team2: 'India',
    liga: 'Cricket - Test match',
    date: 22,
  },

  {
    time: '00:30',
    team1: 'SF Unicorns',
    team2: 'Texas Super Kings',
    liga: 'Major League Cricket',
    date: 23,
  },
  {
    time: '03:10',
    team1: 'Houston Astros',
    team2: 'Texas Rangers',
    liga: 'Major League Baseball',
    date: 23,
  },
  {
    time: '05:00',
    team1: 'Colombia (W)',
    team2: 'South Korea (W)',
    liga: 'FIFA World Cup (W)',
    date: 23,
  },
  {
    time: '08:30',
    team1: 'New Zealand (W)',
    team2: 'Philippines (W)',
    liga: 'FIFA World Cup (W)',
    date: 23,
  },
  {
    time: '11:00',
    team1: 'Switzerland (W)',
    team2: 'Norway (W)',
    liga: 'FIFA World Cup (W)',
    date: 23,
  },
  {
    time: '14:00',
    team1: 'Stephen Fulton',
    team2: 'Naoya Inoue',
    liga: 'Boxing',
    date: 24,
  },
  {
    time: '21:45',
    team1: 'Falkirk',
    team2: 'Dundee Utd',
    liga: 'Scottish League Cup',
    date: 24,
  },
  {
    time: '22:00',
    team1: 'TBC',
    team2: 'TBC',
    liga: 'UEFA Champions League',
    date: 24,
  },
  {
    time: '22:00',
    team1: 'TBC',
    team2: 'TBC',
    liga: 'UEFA Champions League',
    date: 24,
  },
  {
    time: '00:30',
    team1: 'MI New York',
    team2: 'Seattle Orcas',
    liga: 'Major League Cricket',
    date: 24,
  },
  {
    time: '02:05',
    team1: 'New York Yankees',
    team2: 'New York Mets',
    liga: 'Major League Baseball',
    date: 24,
  },
  {
    time: '03:10',
    team1: 'Milwaukee Brewers',
    team2: 'Cincinnati Reds',
    liga: 'Major League Baseball',
    date: 24,
  },
  {
    time: '05:30',
    team1: 'Man Utd',
    team2: 'Wrexham',
    liga: 'Friendly',
    date: 24,
  },
  {
    time: '08:00',
    team1: 'Japan (W)',
    team2: 'Costa Rica (W)',
    liga: 'FIFA World Cup (W)',
    date: 24,
  },
  {
    time: '10:30',
    team1: 'Spain (W)',
    team2: 'Zambia (W)',
    liga: 'FIFA World Cup (W)',
    date: 25,
  },
  {
    time: '15:00',
    team1: 'Canada (W)',
    team2: 'Rep of Ireland (W)',
    liga: 'FIFA World Cup (W)',
    date: 25,
  },
  {
    time: '20:10',
    team1: 'Minnesota Twins',
    team2: 'Seattle Mariners',
    liga: 'Major League Baseball',
    date: 25,
  },
  {
    time: '22:00',
    team1: 'TBC',
    team2: 'TBC',
    liga: 'UEFA Champions League',
    date: 25,
  },
  {
    time: '22:00',
    team1: 'TBC',
    team2: 'TBC',
    liga: 'UEFA Champions League',
    date: 25,
  },
  {
    time: '23:10',
    team1: 'Los Angeles Dodgers',
    team2: 'Toronto Blue Jays',
    liga: 'Major League Baseball',
    date: 25,
  },
  {
    time: '00:30',
    team1: 'Brentford',
    team2: 'Brighton',
    liga: 'Premier League Summer Series',
    date: 25,
  },
  {
    time: '02:00',
    team1: 'Fulham',
    team2: 'Aston Villa',
    liga: 'Premier League Summer Series',
    date: 26,
  },
  {
    time: '03:15',
    team1: 'Chelsea',
    team2: 'Newcastle',
    liga: 'Premier League Summer Series',
    date: 26,
  },
  {
    time: '03:30',
    team1: 'Real Madrid',
    team2: 'Man Utd',
    liga: 'Soccer Champions Tour',
    date: 26,
  },
  {
    time: '04:00',
    team1: 'USA (W)',
    team2: 'Netherlands (W)',
    liga: 'FIFA World Cup (W)',
    date: 26,
  },
  {
    time: '05:30',
    team1: 'Arsenal',
    team2: 'Barcelona',
    liga: 'Soccer Champions Tour',
    date: 26,
  },
  {
    time: '10:30',
    team1: 'Portugal (W)',
    team2: 'Vietnam (W)',
    liga: 'FIFA World Cup (W)',
    date: 26,
  },
  {
    time: '10:40',
    team1: 'Broncos (W)',
    team2: 'Titans (W)',
    liga: 'Australian NRL Premiership (W)',
    date: 26,
  },
  {
    time: '13:00',
    team1: 'Australia (W)',
    team2: 'Nigeria (W)',
    liga: 'FIFA World Cup (W)',
    date: 27,
  },
  {
    time: '15:40',
    team1: 'England',
    team2: 'Australia',
    liga: 'The Ashes',
    date: 27,
  },
  {
    time: '16:00',
    team1: 'West Indies',
    team2: 'India',
    liga: 'One Day Internationals',
    date: 27,
  },
  {
    time: '20:10',
    team1: 'Detroit Tigers',
    team2: 'Los Angeles Angels',
    date: 27,
  },
  {
    time: '22:00',
    team1: 'Huddersfield Giants',
    team2: 'Hull FC',
    liga: 'English Super League',
    date: 27,
  },
];

export default broadcastsList;
