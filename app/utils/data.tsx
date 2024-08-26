 const locations = [
  {
    name: "Sarita Vihar",
    id: "ZWL005764"
  },
  {
    name: "Faridabad Sector 41-50",
    id: "ZWL008752"
  },
  {
    name: "New Friends Colony",
    id: "ZWL005996"
  },
  {
    name: "Sector 26 (Noida)",
    id: "ZWL005243"
  },
  {
    name: "New Industrial Town",
    id: "ZWL009032"
  },
  {
    name: "Tilak Nagar",
    id: "ZWL005428"
  },
  {
    name: "Sector 10, Gurgaon",
    id: "ZWL001073"
  },
  {
    name: "Ashok Vihar, Delhi",
    id: "ZWL001319"
  },
  {
    name: "Kalkaji",
    id: "ZWL004800"
  },
  {
    name: "Sector 53, Delhi NCR",
    id: "ZWL003118"
  },
  {
    name: "Sector 49, Delhi NCR",
    id: "ZWL002091"
  },
  {
    name: "Vasundhara",
    id: "ZWL002662"
  },
  {
    name: "Rajinder Nagar",
    id: "ZWL001404"
  },
  {
    name: "Safdarjung Enclave",
    id: "ZWL008963"
  },
  {
    name: "Connaught Place",
    id: "ZWL006538"
  },
  {
    name: "Sector 66, Delhi NCR",
    id: "ZWL003075"
  },
  {
    name: "Sector 57, Delhi NCR",
    id: "ZWL003721"
  },
  {
    name: "Moti Bagh, Delhi",
    id: "ZWL006396"
  },
  {
    name: "Patel Nagar, Delhi",
    id: "ZWL004535"
  },
  {
    name: "Greater Noida",
    id: "ZWL008554"
  },
  {
    name: "Karkardooma, Delhi",
    id: "ZWL004533"
  },
  {
    name: "Tigaon",
    id: "ZWL002179"
  },
  {
    name: "Sector 50 (Noida)",
    id: "ZWL007487"
  },
  {
    name: "Vasant Kunj, Delhi",
    id: "ZWL007120"
  },
  {
    name: "Dwarka, Delhi",
    id: "ZWL007486"
  },
  {
    name: "Sector 15, Delhi NCR",
    id: "ZWL006287"
  },
  {
    name: "Mayur Vihar Phase III",
    id: "ZWL002146"
  },
  {
    name: "Crossing Republik",
    id: "ZWL008405"
  },
  {
    name: "Sector 28, Delhi NCR",
    id: "ZWL004455"
  },
  {
    name: "Palam Vihar, Gurgaon",
    id: "ZWL005087"
  },
  {
    name: "Sector 63 (Noida)",
    id: "ZWL009648"
  },
  {
    name: "Raj Nagar, Ghaziabad",
    id: "ZWL008317"
  },
  {
    name: "Sector 128, Delhi NCR",
    id: "ZWL005878"
  },
  {
    name: "Sector 56, Gurgaon",
    id: "ZWL003241"
  },
  {
    name: "Indirapuram",
    id: "ZWL007224"
  },
  {
    name: "Malviya Nagar",
    id: "ZWL009834"
  },
  {
    name: "Sector 43, Gurgaon",
    id: "ZWL007284"
  },
  {
    name: "Sector 120 (Noida)",
    id: "ZWL006738"
  },
  {
    name: "Saket",
    id: "ZWL007329"
  },
  {
    name: "Sector 18 (Noida)",
    id: "ZWL001752"
  },
  {
    name: "Naraina",
    id: "ZWL007594"
  },
  {
    name: "Patparganj",
    id: "ZWL006116"
  },
  {
    name: "Ghitorni",
    id: "ZWL009925"
  },
  {
    name: "Faridabad Sector 1-11",
    id: "ZWL009335"
  },
  {
    name: "Sector 24, Delhi NCR",
    id: "ZWL009638"
  },
  {
    name: "Rajouri Garden",
    id: "ZWL005670"
  },
  {
    name: "Vishnu Garden",
    id: "ZWL003757"
  },

  {
    name: "Sector 48, Gurgaon",
    id: "ZWL003610"
  },
  {
    name: "Kirti Nagar",
    id: "ZWL005971"
  },
  {
    name: "Faridabad Sector 81-89",
    id: "ZWL003626"
  },
  {
    name: "GK I",
    id: "ZWL005876"
  },
  {
    name: "Mohan Estate",
    id: "ZWL006295"
  },
  {
    name: "Mukherjee Nagar",
    id: "ZWL007653"
  },
  {
    name: "Mehrauli",
    id: "ZWL006697"
  },
  {
    name: "Burari",
    id: "ZWL003259"
  },
  {
    name: "Gaur city, Ghaziabad",
    id: "ZWL004759"
  },
  {
    name: "GK II",
    id: "ZWL004477"
  },
  {
    name: "Rohini",
    id: "ZWL005077"
  },
  {
    name: "Rangpuri",
    id: "ZWL008191"
  },
  {
    name: "Sector 46, Delhi NCR",
    id: "ZWL006092"
  },
  {
    name: "Sector 62 (Noida)",
    id: "ZWL001549"
  },
  {
    name: "Shalimar Bagh",
    id: "ZWL001036"
  },
  {
    name: "Model Town",
    id: "ZWL006996"
  },
  {
    name: "Faridabad Sector 16-20",
    id: "ZWL007566"
  },
  {
    name: "Sector 2 (Noida)",
    id: "ZWL009852"
  },
  {
    name: "Govindpuram",
    id: "ZWL008648"
  },
  {
    name: "Gwal Pahari",
    id: "ZWL009728"
  },
  {
    name: "Nehru Nagar",
    id: "ZWL006868"
  },
  {
    name: "Chittaranjan Park",
    id: "ZWL002067"
  },
  {
    name: "IMT Manesar",
    id: "ZWL008791"
  },
  {
    name: "Sector 73 Z Kitchen",
    id: "ZWL003043"
  },
  {
    name: "Sector 51, Delhi NCR",
    id: "ZWL004159"
  },
  {
    name: "Ballabhgarh",
    id: "ZWL005960"
  },
  {
    name: "Nangloi",
    id: "ZWL009293"
  },
  {
    name: "Uttam Nagar",
    id: "ZWL001663"
  },
  {
    name: "Sector 47, Delhi NCR",
    id: "ZWL005762"
  },
  {
    name: "Paharganj",
    id: "ZWL005345"
  },
  {
    name: "Sector 25, Delhi NCR",
    id: "ZWL008225"
  },
  {
    name: "Pitampura",
    id: "ZWL001933"
  },
  {
    name: "Shahdara",
    id: "ZWL003591"
  },
  {
    name: "Sector 31, Delhi NCR",
    id: "ZWL007061"
  },
  {
    name: "Sector 23, Delhi NCR",
    id: "ZWL008476"
  },
  {
    name: "Sector 12 (Noida)",
    id: "ZWL009008"
  },
  {
    name: "Mayur Vihar Phase II",
    id: "ZWL005323"
  },
  {
    name: "Faridabad Sector 12-15",
    id: "ZWL001412"
  },
  {
    name: "DLF PHASE 1 (SECTOR 26)",
    id: "ZWL005925"
  },
  {
    name: "Laxmi Nagar",
    id: "ZWL008716"
  },
  {
    name: "Karol Bagh",
    id: "ZWL009339"
  },
  {
    name: "Chhatarpur",
    id: "ZWL009096"
  },
  {
    name: "Paschim Vihar",
    id: "ZWL006720"
  },
  {
    name: "Sector 1, Noida",
    id: "ZWL002908"
  },
  {
    name: "South Extension I",
    id: "ZWL001186"
  },
  {
    name: "Sector 18, Delhi NCR",
    id: "ZWL004789"
  },
  {
    name: "Kamla Nagar",
    id: "ZWL008978"
  },

  {
    name: "Janakpuri",
    id: "ZWL007903"
  },
  {
    name: "Vikaspuri",
    id: "ZWL008897"
  },
  {
    name: "Najafgarh",
    id: "ZWL007431"
  },
  {
    name: "Mayur Vihar Phase 1",
    id: "ZWL001112"
  },
  {
    name: "Sez Noida 1",
    id: "ZWL008649"
  },
  {
    name: "Gulavali, Noida",
    id: "ZWL006384"
  },
  {
    name: "Sector 14, Delhi NCR",
    id: "ZWL007840"
  },
  {
    name: "Sector 76 (Noida)",
    id: "ZWL002072"
  },
  {
    name: "Green Park",
    id: "ZWL003077"
  },
  {
    name: "Munirka",
    id: "ZWL005395"
  },
  {
    name: "NEHRU PLACE",
    id: "ZWL005729"
  },
  {
    name: "Lajpat Nagar",
    id: "ZWL005736"
  },
  {
    name: "Sector 52 (Noida)",
    id: "ZWL007212"
  },
  {
    name: "Sector 100 (Noida)",
    id: "ZWL004803"
  },
  {
    name: "Sector 50, Delhi NCR",
    id: "ZWL003444"
  },
  {
    name: "Dilshad Garden",
    id: "ZWL008293"
  },
  {
    name: "Sector 29, Gurgaon",
    id: "ZWL007308"
  },
  {
    name: "SUSHANT LOK 1",
    id: "ZWL008219"
  },
  {
    name: "SAHIBABAD",
    id: "ZWL006234"
  },
  {
    name: "Sector 45 (Noida)",
    id: "ZWL007666"
  },
  {
    name: "Sector 84, Delhi NCR",
    id: "ZWL002490"
  },
  {
    name: "Sector 7, Gurgaon",
    id: "ZWL007138"
  },
  {
    name: "Sector 27, Delhi NCR",
    id: "ZWL009706"
  },
  {
    name: "Hauz Khas",
    id: "ZWL001267"
  },
  {
    name: "Jangpura",
    id: "ZWL003552"
  },
  {
    name: "Sector 52, Gurgaon",
    id: "ZWL008401"
  },
  {
    name: "Vaishali, Ghaziabad",
    id: "ZWL001758"
  },
  {
    name: "Shibpur",
    id: "ZWL003128"
  },
  {
    name: "Kalyani 1, Kolkata",
    id: "ZWL004322"
  },
  {
    name: "Bansdroni",
    id: "ZWL002495"
  },
  {
    name: "Bow Barracks",
    id: "ZWL009257"
  },
  {
    name: "Baranagar, Kolkata",
    id: "ZWL005435"
  },
  {
    name: "Sonarpur, Kolkata",
    id: "ZWL007041"
  },
  {
    name: "Ballygunge",
    id: "ZWL002918"
  },
  {
    name: "Sinthi, Kolkata",
    id: "ZWL003388"
  },
  {
    name: "Salt Lake 2",
    id: "ZWL008806"
  },
  {
    name: "Alipore",
    id: "ZWL008635"
  },
  {
    name: "Baguihati",
    id: "ZWL002312"
  },
  {
    name: "South Dum Dum",
    id: "ZWL001499"
  },
  {
    name: "Purba Barisha",
    id: "ZWL003315"
  },
  {
    name: "Jadavpur",
    id: "ZWL003794"
  },
  {
    name: "Tollygunge",
    id: "ZWL006574"
  },
  {
    name: "Shyam Bazar",
    id: "ZWL004138"
  },
  {
    name: "Behala",
    id: "ZWL009022"
  },
  {
    name: "Chandannagar, Kolkata",
    id: "ZWL003271"
  },
  {
    name: "Barrackpore",
    id: "ZWL003951"
  },
  {
    name: "East Kolkata Township",
    id: "ZWL003915"
  },

  {
    name: "Bhowanipore",
    id: "ZWL006750"
  },
  {
    name: "Elgin",
    id: "ZWL008828"
  },
  {
    name: "Howrah",
    id: "ZWL008426"
  },
  {
    name: "New Alipore",
    id: "ZWL007323"
  },
  {
    name: "Barasat",
    id: "ZWL006266"
  },
  {
    name: "New Town (Kolkata)",
    id: "ZWL008393"
  },
  {
    name: "Uttarpara",
    id: "ZWL007966"
  },
  {
    name: "Santoshpur",
    id: "ZWL001039"
  },
  {
    name: "Liluah",
    id: "ZWL003882"
  },
  {
    name: "Rajarhat",
    id: "ZWL004925"
  },
  {
    name: "Park Street area",
    id: "ZWL005244"
  },
  {
    name: "Baghajatin Colony",
    id: "ZWL003687"
  },
  {
    name: "Shrirampur",
    id: "ZWL008120"
  },
  {
    name: "Chhota Jagulia",
    id: "ZWL007514"
  },
  {
    name: "Dum Dum",
    id: "ZWL003935"
  },
  {
    name: "Kestopur",
    id: "ZWL002931"
  },
  {
    name: "Sodepur",
    id: "ZWL006521"
  },
  {
    name: "Nimta",
    id: "ZWL005558"
  },
  {
    name: "Shapoorji",
    id: "ZWL005174"
  },
  {
    name: "Barabazar Market",
    id: "ZWL002488"
  },
  {
    name: "Salt Lake 1",
    id: "ZWL007934"
  },
  {
    name: "Tangra",
    id: "ZWL001584"
  },
  {
    name: "Gariahat",
    id: "ZWL005429"
  },
  {
    name: "Santragachi",
    id: "ZWL005121"
  },
  {
    name: "Garia",
    id: "ZWL007830"
  },
  {
    name: "Chinsurah, Kolkata",
    id: "ZWL008991"
  },
  {
    name: "Kankurgachi",
    id: "ZWL009194"
  },
  {
    name: "Kasba",
    id: "ZWL004722"
  },
  {
    name: "Mira Road East",
    id: "ZWL006536"
  },
  {
    name: "Kandivali West",
    id: "ZWL004934"
  },
  {
    name: "Boisar, Mumbai",
    id: "ZWL004821"
  },
  {
    name: "Bhiwandi",
    id: "ZWL007249"
  },
  {
    name: "Panvel",
    id: "ZWL001164"
  },
  {
    name: "Kopar Khairane (Navi Mumbai)",
    id: "ZWL009537"
  },
  {
    name: "Vashi",
    id: "ZWL007275"
  },
  {
    name: "Titwala, Mumbai",
    id: "ZWL002556"
  },
  {
    name: "Kandivali East",
    id: "ZWL006937"
  },
  {
    name: "Nalasopara",
    id: "ZWL008636"
  },
  {
    name: "Lower Parel",
    id: "ZWL003995"
  },
  {
    name: "Goregaon East",
    id: "ZWL006938"
  },
  {
    name: "Santacruz East",
    id: "ZWL008550"
  },
  {
    name: "Ghatkopar East, Mumbai",
    id: "ZWL004494"
  },
  {
    name: "Palava",
    id: "ZWL003708"
  },
  {
    name: "Malad West",
    id: "ZWL008711"
  },
  {
    name: "Borivali East",
    id: "ZWL005991"
  },
  {
    name: "Kalyan, West, Mumbai",
    id: "ZWL002865"
  },
  {
    name: "Santacruz West",
    id: "ZWL004749"
  },

  {
    name: "Badlapur, Mumbai",
    id: "ZWL001274"
  },
  {
    name: "Ambernath",
    id: "ZWL007699"
  },
  {
    name: "Marine lines",
    id: "ZWL001764"
  },
  {
    name: "Mulund West",
    id: "ZWL002921"
  },
  {
    name: "Airoli",
    id: "ZWL001410"
  },
  {
    name: "Kharghar (Navi Mumbai)",
    id: "ZWL009757"
  },
  {
    name: "Ulhasnagar (Mumbai)",
    id: "ZWL002059"
  },
  {
    name: "Ghatkopar West, Mumbai",
    id: "ZWL001058"
  },
  {
    name: "Bandra West",
    id: "ZWL006995"
  },
  {
    name: "Dadar West",
    id: "ZWL004692"
  },
  {
    name: "Andheri West",
    id: "ZWL007667"
  },
  {
    name: "Vile Parle West",
    id: "ZWL009338"
  },
  {
    name: "Byculla",
    id: "ZWL009167"
  },
  {
    name: "Vasai",
    id: "ZWL006032"
  },
  {
    name: "Kalyan, East (Mumbai)",
    id: "ZWL007397"
  },
  {
    name: "Ulwe, Mumbai",
    id: "ZWL009360"
  },
  {
    name: "Fort",
    id: "ZWL002205"
  },
  {
    name: "Andheri East",
    id: "ZWL008975"
  },
  {
    name: "Chembur",
    id: "ZWL009252"
  },
  {
    name: "Palghar, Mumbai",
    id: "ZWL002558"
  },
  {
    name: "Mumbra, Mumbai",
    id: "ZWL002742"
  },
  {
    name: "Mulund East",
    id: "ZWL004971"
  },
  {
    name: "Shirdhon, Mumbai",
    id: "ZWL008348"
  },
  {
    name: "Virar",
    id: "ZWL001344"
  },
  {
    name: "Tardeo",
    id: "ZWL007606"
  },
  {
    name: "Bandra East",
    id: "ZWL005697"
  },
  {
    name: "Thane West",
    id: "ZWL005442"
  },
  {
    name: "Kurla West",
    id: "ZWL004189"
  },
  {
    name: "Goregaon West",
    id: "ZWL005000"
  },
  {
    name: "Hiranandani Estate",
    id: "ZWL002056"
  },
  {
    name: "Dombivli",
    id: "ZWL009826"
  },
  {
    name: "Bhandup West",
    id: "ZWL007889"
  },
  {
    name: "Kamothe",
    id: "ZWL008977"
  },
  {
    name: "Powai, Mumbai",
    id: "ZWL006622"
  },
  {
    name: "Naupada",
    id: "ZWL002074"
  },
  {
    name: "Bhayandar West",
    id: "ZWL008874"
  },
  {
    name: "Vileparle East",
    id: "ZWL001334"
  },
  {
    name: "Sion",
    id: "ZWL008378"
  },
  {
    name: "Nerul (Navi Mumbai)",
    id: "ZWL007690"
  },
  {
    name: "Dahisar West",
    id: "ZWL007706"
  },
  {
    name: "Colaba",
    id: "ZWL005320"
  },
  {
    name: "Mahim",
    id: "ZWL006544"
  },
  {
    name: "Wadala",
    id: "ZWL002686"
  },
  {
    name: "Borivali West",
    id: "ZWL001089"
  },
  {
    name: "Palava Lakeshore, Mumbai",
    id: "ZWL008360"
  },
  {
    name: "Banashankari",
    id: "ZWL003467"
  },
  {
    name: "Rajarajeshwari Nagar",
    id: "ZWL004900"
  },

  {
    name: "JP Nagar",
    id: "ZWL005530"
  },
  {
    name: "Mahadevapura",
    id: "ZWL007643"
  },
  {
    name: "Jalahalli",
    id: "ZWL003159"
  },
  {
    name: "RT Nagar",
    id: "ZWL002736"
  },
  {
    name: "KR Puram",
    id: "ZWL006369"
  },
  {
    name: "Electronic City",
    id: "ZWL006274"
  },
  {
    name: "Vijayanagar",
    id: "ZWL005375"
  },
  {
    name: "Marathahalli",
    id: "ZWL008600"
  },
  {
    name: "Sarjapur road",
    id: "ZWL002292"
  },
  {
    name: "Brookefields",
    id: "ZWL004341"
  },
  {
    name: "Whitefield",
    id: "ZWL007633"
  },
  {
    name: "Nagavara",
    id: "ZWL009212"
  },
  {
    name: "New BEL Road",
    id: "ZWL007628"
  },
  {
    name: "Koramangala",
    id: "ZWL001156"
  },
  {
    name: "Bannerghatta Road, Bangalore",
    id: "ZWL004924"
  },
  {
    name: "Aavalahalli",
    id: "ZWL009229"
  },
  {
    name: "BIAL Airport Road",
    id: "ZWL005576"
  },
  {
    name: "Yelahanka",
    id: "ZWL006658"
  },
  {
    name: "Kadugodi",
    id: "ZWL002882"
  },
  {
    name: "Kammanahalli",
    id: "ZWL006631"
  },
  {
    name: "HSR Layout",
    id: "ZWL001196"
  },
  {
    name: "BTM Layout",
    id: "ZWL006600"
  },
  {
    name: "Varthur",
    id: "ZWL006854"
  },
  {
    name: "Indiranagar",
    id: "ZWL001273"
  },
  {
    name: "Jayanagar",
    id: "ZWL008105"
  },
  {
    name: "Sahakaranagar",
    id: "ZWL005206"
  },
  {
    name: "Devanahalli, Bangalore",
    id: "ZWL008797"
  },
  {
    name: "MG Road",
    id: "ZWL001962"
  },
  {
    name: "Rajajinagar",
    id: "ZWL006844"
  },
  {
    name: "Bellandur",
    id: "ZWL004164"
  },
  {
    name: "NIGDI(Pune)",
    id: "ZWL007698"
  },
  {
    name: "Bibvewadi (Pune)",
    id: "ZWL005773"
  },
  {
    name: "Nanded-Nahre",
    id: "ZWL009577"
  },
  {
    name: "Bhosari (Pune)",
    id: "ZWL002253"
  },
  {
    name: "Camp Area",
    id: "ZWL003498"
  },
  {
    name: "Magarpatta",
    id: "ZWL004311"
  },
  {
    name: "Pimpri",
    id: "ZWL007801"
  },
  {
    name: "Yerwada",
    id: "ZWL008134"
  },
  {
    name: "Kalyani Nagar (Pune)",
    id: "ZWL009625"
  },
  {
    name: "Sus, Pune",
    id: "ZWL001627"
  },
  {
    name: "Bavdhan",
    id: "ZWL006236"
  },
  {
    name: "Viman nagar",
    id: "ZWL006743"
  },
  {
    name: "Aundh (Pune)",
    id: "ZWL004927"
  },
  {
    name: "Katraj (Pune)",
    id: "ZWL008370"
  },
  {
    name: "Pimple Saudagar_Pune",
    id: "ZWL004523"
  },
  {
    name: "Dhanori",
    id: "ZWL001778"
  },
  {
    name: "Dehu Road",
    id: "ZWL003386"
  },

  {
    name: "Koregaon Park (Pune)",
    id: "ZWL009157"
  },
  {
    name: "Hinjewadi - Phase 2",
    id: "ZWL004962"
  },
  {
    name: "Wakad_Pune",
    id: "ZWL005340"
  },
  {
    name: "Manas Lake, Pune",
    id: "ZWL009671"
  },
  {
    name: "Sadashiv Peth",
    id: "ZWL008921"
  },
  {
    name: "Ghorpadi (Pune)",
    id: "ZWL008940"
  },
  {
    name: "Pashan (Pune)",
    id: "ZWL009874"
  },
  {
    name: "SP Infocity, Pune",
    id: "ZWL006660"
  },
  {
    name: "Manjri, Pune",
    id: "ZWL003813"
  },
  {
    name: "Khadki, Pune",
    id: "ZWL007471"
  },
  {
    name: "Kothrud (Pune)",
    id: "ZWL009602"
  },
  {
    name: "Sinhagad Road (Pune)",
    id: "ZWL002208"
  },
  {
    name: "New Sangvi, Pune",
    id: "ZWL007895"
  },
  {
    name: "Nimgaon, Pune",
    id: "ZWL003099"
  },
  {
    name: "Wagholi",
    id: "ZWL004575"
  },
  {
    name: "Keshavnagar, Pune",
    id: "ZWL004513"
  },
  {
    name: "Baner (Pune)",
    id: "ZWL008983"
  },
  {
    name: "Warje (Pune)",
    id: "ZWL005520"
  },
  {
    name: "Mundwa, Pune",
    id: "ZWL003300"
  },
  {
    name: "Chakan",
    id: "ZWL001963"
  },
  {
    name: "Shivaji Nagar (Pune)",
    id: "ZWL002422"
  },
  {
    name: "Yewalewadi, Pune",
    id: "ZWL005088"
  },
  {
    name: "Bopkhel, Pune",
    id: "ZWL003014"
  },
  {
    name: "Kharadi",
    id: "ZWL001472"
  },
  {
    name: "Talegaon Dabhade",
    id: "ZWL004339"
  },
  {
    name: "Hinjewadi - Phase 1",
    id: "ZWL003817"
  },
  {
    name: "Wanowrie-Kondhwa",
    id: "ZWL007925"
  },
  {
    name: "Nagole",
    id: "ZWL003370"
  },
  {
    name: "Attapur",
    id: "ZWL002088"
  },
  {
    name: "Peerzadiguda",
    id: "ZWL006702"
  },
  {
    name: "Begumpet",
    id: "ZWL008776"
  },
  {
    name: "Suraram, Hyderabad",
    id: "ZWL003918"
  },
  {
    name: "Banjara Hills",
    id: "ZWL004079"
  },
  {
    name: "Alwal",
    id: "ZWL008309"
  },
  {
    name: "Sainikpuri",
    id: "ZWL002433"
  },
  {
    name: "Saroor Nagar",
    id: "ZWL007390"
  },
  {
    name: "Karkhana",
    id: "ZWL004767"
  },
  {
    name: "Kompally",
    id: "ZWL006016"
  },
  {
    name: "Himayatnagar",
    id: "ZWL003283"
  },
  {
    name: "Medchal Road",
    id: "ZWL007311"
  },
  {
    name: "Kukatpally",
    id: "ZWL005919"
  },
  {
    name: "Amberpet",
    id: "ZWL001822"
  },
  {
    name: "Jeedimetla",
    id: "ZWL008208"
  },
  {
    name: "Gachibowli",
    id: "ZWL001362"
  },
  {
    name: "LB Nagar",
    id: "ZWL002162"
  },
  {
    name: "Dilsukhnagar",
    id: "ZWL009712"
  },
  {
    name: "Masab Tank",
    id: "ZWL005963"
  },


  {
    name: "Bachupally",
    id: "ZWL008297"
  },
  {
    name: "Manikonda",
    id: "ZWL005424"
  },
  {
    name: "Shamshabad",
    id: "ZWL008585"
  },
  {
    name: "Miyapur",
    id: "ZWL008599"
  },
  {
    name: "Hayath Nagar, Hyderabad",
    id: "ZWL006535"
  },
  {
    name: "Sangareddy, Hyderabad",
    id: "ZWL006545"
  },
  {
    name: "JNTU",
    id: "ZWL009719"
  },
  {
    name: "Serilingampally",
    id: "ZWL008890"
  },
  {
    name: "Nizampet",
    id: "ZWL007119"
  },
  {
    name: "Q City, Hyderabad",
    id: "ZWL004747"
  },
  {
    name: "Madhapur",
    id: "ZWL004802"
  },
  {
    name: "Narayanguda",
    id: "ZWL004665"
  },
  {
    name: "ECIL",
    id: "ZWL005999"
  },
  {
    name: "Toli Chowki",
    id: "ZWL003360"
  },
  {
    name: "Kondapur",
    id: "ZWL007187"
  },
  {
    name: "Charminar",
    id: "ZWL007344"
  },
  {
    name: "Sivarampalli",
    id: "ZWL008438"
  },
  {
    name: "Tarnaka",
    id: "ZWL005494"
  },
  {
    name: "Moosapet",
    id: "ZWL009519"
  },
  {
    name: "Patancheru, Hyderabad",
    id: "ZWL001687"
  },
  {
    name: "Vanasthali Puram",
    id: "ZWL005569"
  },
  {
    name: "Ameerpet",
    id: "ZWL003027"
  },
  {
    name: "Uppal",
    id: "ZWL001337"
  },
  {
    name: "Malakpet",
    id: "ZWL001579"
  },
  {
    name: "Hafiz Baba Nagar",
    id: "ZWL006699"
  },
  {
    name: "Mokila, Hyderabad",
    id: "ZWL008512"
  },
  {
    name: "Potheri",
    id: "ZWL006789"
  },
  {
    name: "Pallavaram",
    id: "ZWL004297"
  },
  {
    name: "Nungambakkam",
    id: "ZWL005190"
  },
  {
    name: "Anna Nagar, Chennai",
    id: "ZWL003967"
  },
  {
    name: "Perambur",
    id: "ZWL008996"
  },
  {
    name: "Mogappair, Chennai",
    id: "ZWL005857"
  },
  {
    name: "Royapuram",
    id: "ZWL006232"
  },
  {
    name: "Mugalivakkam",
    id: "ZWL008548"
  },
  {
    name: "Porur",
    id: "ZWL006053"
  },
  {
    name: "Redhills",
    id: "ZWL001398"
  },
  {
    name: "Tambaram",
    id: "ZWL001701"
  },
  {
    name: "Avadi",
    id: "ZWL008876"
  },
  {
    name: "Kilpauk",
    id: "ZWL003387"
  },
  {
    name: "Ashok Nagar (CHENNAI)",
    id: "ZWL007059"
  },
  {
    name: "Adyar",
    id: "ZWL006520"
  },
  {
    name: "Alwarpet",
    id: "ZWL001210"
  },
  {
    name: "Selaiyur",
    id: "ZWL007171"
  },
  {
    name: "Thandalam, Chennai",
    id: "ZWL006329"
  },
  {
    name: "Sholinganallur",
    id: "ZWL004233"
  },
  {
    name: "Ambattur",
    id: "ZWL007209"
  },
  {
    name: "Medavakkam",
    id: "ZWL003452"
  },

  {
    name: "Poonamallee",
    id: "ZWL007176"
  },
  {
    name: "Minjur, Chennai",
    id: "ZWL009897"
  },
  {
    name: "Urapakkam",
    id: "ZWL004882"
  },
  {
    name: "Velachery",
    id: "ZWL006156"
  },
  {
    name: "Navallur",
    id: "ZWL001141"
  },
  {
    name: "Vadapalani",
    id: "ZWL004431"
  },
  {
    name: "T Nagar",
    id: "ZWL001516"
  },
  {
    name: "Hazratganj",
    id: "ZWL003425"
  },
  {
    name: "Aminabad",
    id: "ZWL006490"
  },
  {
    name: "Chowk",
    id: "ZWL009091"
  },
  {
    name: "Telibagh, Lucknow",
    id: "ZWL003030"
  },
  {
    name: "Husainganj",
    id: "ZWL004978"
  },
  {
    name: "Jankipuram",
    id: "ZWL009177"
  },
  {
    name: "Arjunganj",
    id: "ZWL004436"
  },
  {
    name: "Chinhat, Lucknow",
    id: "ZWL005470"
  },
  {
    name: "Mahanagar",
    id: "ZWL001500"
  },
  {
    name: "Ashiyana",
    id: "ZWL003371"
  },
  {
    name: "Indira Nagar, Lucknow",
    id: "ZWL003635"
  },
  {
    name: "Vasant Kunj, Lucknow",
    id: "ZWL003320"
  },
  {
    name: "Rajajipuram",
    id: "ZWL009682"
  },
  {
    name: "Gomti Nagar",
    id: "ZWL002273"
  },
  {
    name: "Alambagh",
    id: "ZWL002331"
  },
  {
    name: "Aliganj, Lucknow",
    id: "ZWL007731"
  },
  {
    name: "Kalyanpur",
    id: "ZWL007011"
  },
  {
    name: "Eroor",
    id: "ZWL003768"
  },
  {
    name: "Kakkanad",
    id: "ZWL005555"
  },
  {
    name: "Nedumbassery, Kochi",
    id: "ZWL002986"
  },
  {
    name: "North Paravur, Kochi",
    id: "ZWL004273"
  },
  {
    name: "Aluva, Kochi",
    id: "ZWL005425"
  },
  {
    name: "Ambalamugal",
    id: "ZWL004691"
  },
  {
    name: "Kalamassery",
    id: "ZWL001981"
  },
  {
    name: "Kaloor",
    id: "ZWL003786"
  },
  {
    name: "Perumbavoor, Kochi",
    id: "ZWL009487"
  },
  {
    name: "Thiruvankulam",
    id: "ZWL007216"
  },
  {
    name: "Vypin, Kochi",
    id: "ZWL002327"
  },
  {
    name: "Ernakulam",
    id: "ZWL006873"
  },
  {
    name: "Fort Kochi",
    id: "ZWL004591"
  },
  {
    name: "Mansarovar-2",
    id: "ZWL005082"
  },
  {
    name: "Tonk road 2",
    id: "ZWL003863"
  },
  {
    name: "Jagatpura",
    id: "ZWL009286"
  },
  {
    name: "Shyam Nagar",
    id: "ZWL009458"
  },
  {
    name: "C Scheme",
    id: "ZWL003704"
  },
  {
    name: "Lal Kothi",
    id: "ZWL003606"
  },
  {
    name: "Pink City",
    id: "ZWL009569"
  },
  {
    name: "Vaishali Nagar",
    id: "ZWL001750"
  },
  {
    name: "Malviya Nagar",
    id: "ZWL002751"
  },
  {
    name: "Sodala",
    id: "ZWL005080"
  },

  {
    name: "Vidhyadhar Nagar",
    id: "ZWL008680"
  },
  {
    name: "Raja Park",
    id: "ZWL008249"
  },
  {
    name: "Shastri Nagar",
    id: "ZWL008915"
  },
  {
    name: "Pratap Nagar",
    id: "ZWL006372"
  },
  {
    name: "Paldi",
    id: "ZWL003133"
  },
  {
    name: "Shahibag",
    id: "ZWL002302"
  },
  {
    name: "Navrangpura",
    id: "ZWL003747"
  },
  {
    name: "Chandkheda",
    id: "ZWL002503"
  },
  {
    name: "Science-City Sola",
    id: "ZWL005979"
  },
  {
    name: "Sector 16, Gandhinagar",
    id: "ZWL005987"
  },
  {
    name: "Vastrapur",
    id: "ZWL001959"
  },
  {
    name: "Prahlad Nagar",
    id: "ZWL007404"
  },
  {
    name: "Nikol",
    id: "ZWL001898"
  },
  {
    name: "Infocity, Gandhinagar",
    id: "ZWL002250"
  },
  {
    name: "Naranpura",
    id: "ZWL004415"
  },
  {
    name: "Bopal",
    id: "ZWL006288"
  },
  {
    name: "Maninagar",
    id: "ZWL009182"
  },
  {
    name: "Bodakdev",
    id: "ZWL009990"
  },
  {
    name: "Gota",
    id: "ZWL003455"
  },
  {
    name: "Sector 15 (Chandigarh)",
    id: "ZWL007561"
  },
  {
    name: "Sector 8 (Chandigarh)",
    id: "ZWL006687"
  },
  {
    name: "Manimajra (Chandigarh)",
    id: "ZWL001934"
  },
  {
    name: "Industrial Area Phase I (Chandigarh)",
    id: "ZWL003936"
  },
  {
    name: "Sector 59 (Chandigarh)",
    id: "ZWL004716"
  },
  {
    name: "Sector 20, Panchkula",
    id: "ZWL002303"
  },
  {
    name: "Sector 8/9 nd Panchkula",
    id: "ZWL009521"
  },
  {
    name: "Sector 28 (Chandigarh)",
    id: "ZWL006817"
  },
  {
    name: "Phase 10 Mohali",
    id: "ZWL003496"
  },
  {
    name: "Gillco, Chandigarh",
    id: "ZWL009894"
  },
  {
    name: "Sector 46 (Chandigarh)",
    id: "ZWL004101"
  },
  {
    name: "Sector 70 (Chandigarh)",
    id: "ZWL003262"
  },
  {
    name: "VIP Road, Zirakpur",
    id: "ZWL009430"
  },
  {
    name: "VR Mall",
    id: "ZWL004196"
  },
  {
    name: "Sector 35 (Chandigarh)",
    id: "ZWL003093"
  },
  {
    name: "Sector 22 (Chandigarh)",
    id: "ZWL009406"
  },
  {
    name: "Verna, Goa",
    id: "ZWL002150"
  },
  {
    name: "Mapusa, Goa",
    id: "ZWL008519"
  },
  {
    name: "Calangute, Goa",
    id: "ZWL004452"
  },
  {
    name: "Majorda, Goa",
    id: "ZWL006556"
  },
  {
    name: "Upper panaji, Goa",
    id: "ZWL002137"
  },
  {
    name: "Ponda, Goa",
    id: "ZWL005093"
  },
  {
    name: "Margao, Goa",
    id: "ZWL002142"
  },
  {
    name: "Vasco, Goa",
    id: "ZWL004621"
  },
  {
    name: "Morjim, Goa",
    id: "ZWL006403"
  },
  {
    name: "Porvorim, Goa",
    id: "ZWL005568"
  },
  {
    name: "Sector 32, Ludhiana",
    id: "ZWL009021"
  },
  {
    name: "Civil Lines, Ludhiana",
    id: "ZWL006208"
  },


  {
    name: "Sarabha Nagar, Ludhiana",
    id: "ZWL006788"
  },
  {
    name: "BRS Nagar, Ludhiana",
    id: "ZWL005256"
  },
  {
    name: "Model Town, Ludhiana",
    id: "ZWL001163"
  },
  {
    name: "Ganesh Nagar, Ludhiana",
    id: "ZWL003304"
  },
  {
    name: "Dugri, Ludhiana",
    id: "ZWL003119"
  },
  {
    name: "Pathar Quarry, Guwahati",
    id: "ZWL006981"
  },
  {
    name: "Basistha-Lokhra, Guwahati",
    id: "ZWL006537"
  },
  {
    name: "North Guwahati, Guwahati",
    id: "ZWL009407"
  },
  {
    name: "Dharapur, Guwahati",
    id: "ZWL004763"
  },
  {
    name: "Lal Ganesh - Kahilipara, Guwahati",
    id: "ZWL007095"
  },
  {
    name: "Paltan-Bazar, Guwahati",
    id: "ZWL002105"
  },
  {
    name: "Azara, Guwahati",
    id: "ZWL003362"
  },
  {
    name: "Changsari, Guwahati",
    id: "ZWL002491"
  },
  {
    name: "Maligaon - Jalukbari, Guwahati",
    id: "ZWL005319"
  },
  {
    name: "Zoo Tiniali - Christian basti, Guwahati",
    id: "ZWL005708"
  },
  {
    name: "Himatpura, Amritsar",
    id: "ZWL001780"
  },
  {
    name: "Rasulpur, Amritsar",
    id: "ZWL008281"
  },
  {
    name: "Ranjit Avenue, Amritsar",
    id: "ZWL004590"
  },
  {
    name: "White Avenue, Amritsar",
    id: "ZWL002073"
  },
  {
    name: "Chheharta, Amritsar",
    id: "ZWL005826"
  },
  {
    name: "Hall Bazar, Amritsar",
    id: "ZWL007456"
  },
  {
    name: "Ashoka Garden, Bhopal",
    id: "ZWL008755"
  },
  {
    name: "Shahpura, Bhopal",
    id: "ZWL009428"
  },
  {
    name: "Airport Area, Bhopal",
    id: "ZWL006900"
  },
  {
    name: "TT Nagar, Bhopal",
    id: "ZWL002615"
  },
  {
    name: "BHEL, Bhopal",
    id: "ZWL003463"
  },
  {
    name: "MP Nagar, Bhopal",
    id: "ZWL002872"
  },
  {
    name: "Hoshangabad Road, Bhopal",
    id: "ZWL005836"
  },
  {
    name: "People's Mall, Bhopal",
    id: "ZWL003417"
  },
  {
    name: "NAD, Vizag",
    id: "ZWL001466"
  },
  {
    name: "Gajuwaka",
    id: "ZWL003024"
  },
  {
    name: "Dwaraka Nagar",
    id: "ZWL004755"
  },
  {
    name: "Madhurawada",
    id: "ZWL009959"
  },
  {
    name: "Madhusudan Nagar, Bhubaneswar",
    id: "ZWL007491"
  },
  {
    name: "Kalinga Nagar, Bhubaneswar",
    id: "ZWL003084"
  },
  {
    name: "Nayapalli, Bhubaneswar",
    id: "ZWL003270"
  },
  {
    name: "Sahid Nagar, Bhubaneswar",
    id: "ZWL007379"
  },
  {
    name: "Lakshmi Sagar, Bhubaneswar",
    id: "ZWL001823"
  },
  {
    name: "Khandagiri, Bhubaneswar",
    id: "ZWL004098"
  },
  {
    name: "Jagmohan Nagar, Bhubaneswar",
    id: "ZWL008906"
  },
  {
    name: "Kharabela Nagar, Bhubaneswar",
    id: "ZWL002821"
  },
  {
    name: "Chandrasekharpur, Bhubaneswar",
    id: "ZWL009572"
  },
  {
    name: "Patia, Bhubaneswar",
    id: "ZWL005652"
  },
  {
    name: "Gandhipuram, Coimbatore",
    id: "ZWL003661"
  },
  {
    name: "Vadavalli",
    id: "ZWL005742"
  },
  {
    name: "RS Puram, Coimbatore",
    id: "ZWL008653"
  },
  {
    name: "Racecourse, Coimbatore",
    id: "ZWL002703"
  },

  {
    name: "Saibaba Colony, Coimbatore",
    id: "ZWL009668"
  },
  {
    name: "Peelamedu, Coimbatore",
    id: "ZWL007527"
  },
  {
    name: "Podanur, Coimbatore",
    id: "ZWL005468"
  },
  {
    name: "Kunniamuthur, Coimbatore",
    id: "ZWL004408"
  },
  {
    name: "Ondipudur, Coimbatore",
    id: "ZWL008265"
  },
  {
    name: "Koundampalayam",
    id: "ZWL007600"
  },
  {
    name: "Saravanampatty",
    id: "ZWL002147"
  },
  {
    name: "Ganapathypudur, Coimbatore",
    id: "ZWL009595"
  },
  {
    name: "Sitra, and Singanallur, Coimbatore",
    id: "ZWL001279"
  },
  {
    name: "South Mangalore",
    id: "ZWL006449"
  },
  {
    name: "Thokkattu, Mangalore",
    id: "ZWL009478"
  },
  {
    name: "Waghodia",
    id: "ZWL002354"
  },
  {
    name: "Fatehgunj",
    id: "ZWL004097"
  },
  {
    name: "Nizampura",
    id: "ZWL009713"
  },
  {
    name: "Diwalipura",
    id: "ZWL008938"
  },
  {
    name: "Akota",
    id: "ZWL004439"
  },
  {
    name: "Manjalpur, Vadodara",
    id: "ZWL002446"
  },
  {
    name: "Shubhanpura",
    id: "ZWL008232"
  },
  {
    name: "Alkapuri",
    id: "ZWL002475"
  },
  {
    name: "Pratap Nagar",
    id: "ZWL005549"
  },
  {
    name: "Sadar",
    id: "ZWL001438"
  },
  {
    name: "Kharabi",
    id: "ZWL006432"
  },
  {
    name: "Hanuman Nagar",
    id: "ZWL009782"
  },
  {
    name: "Dharampeth",
    id: "ZWL008282"
  },
  {
    name: "Manish Nagar",
    id: "ZWL001041"
  },
  {
    name: "Ayodhya Nagar, Nagpur",
    id: "ZWL007188"
  },
  {
    name: "Gandhibagh",
    id: "ZWL003633"
  },
  {
    name: "Central Mysore",
    id: "ZWL002458"
  },
  {
    name: "Udhna, Surat",
    id: "ZWL005095"
  },
  {
    name: "City Light, Surat",
    id: "ZWL002155"
  },
  {
    name: "Athwa",
    id: "ZWL007951"
  },
  {
    name: "Vesu, Surat",
    id: "ZWL006000"
  },
  {
    name: "Adajan, Surat",
    id: "ZWL008198"
  },
  {
    name: "Varaccha, Surat",
    id: "ZWL002771"
  },
  {
    name: "New Textile Market, Surat",
    id: "ZWL005626"
  },
  {
    name: "Katargam, Surat",
    id: "ZWL005423"
  },
  {
    name: "Kazhakoottam, Thiruvananthapuram",
    id: "ZWL009343"
  },
  {
    name: "Tvm Central",
    id: "ZWL007746"
  },
  {
    name: "Nemom, Thiruvananthapuram",
    id: "ZWL002223"
  },
  {
    name: "Governorpet, Vijayawada",
    id: "ZWL005308"
  },
  {
    name: "Gunadala, Vijayawada",
    id: "ZWL004428"
  },
  {
    name: "Gollapudi, Vijayawada",
    id: "ZWL002106"
  },
  {
    name: "Auto Nagar, Vijayawada",
    id: "ZWL005858"
  },
  {
    name: "Labbipet, Vijayawada",
    id: "ZWL003905"
  },
  {
    name: "Shastri Nagar, Jalandhar",
    id: "ZWL009921"
  },
  {
    name: "Gurdev Nagar, Jalandhar",
    id: "ZWL002344"
  },
  {
    name: "Paragpur, Jalandhar",
    id: "ZWL001077"
  },





  {
    name: "Model Town, Jalandhar",
    id: "ZWL005408"
  },
  {
    name: "Basti Nau, Jalandhar",
    id: "ZWL001624"
  },
  {
    name: "Rama Mandi, Jalandhar",
    id: "ZWL004713"
  },
  {
    name: "Greater Kailash, Jammu",
    id: "ZWL007457"
  },
  {
    name: "Barnai, Jammu",
    id: "ZWL005892"
  },
  {
    name: "Gandhi Nagar, Jammu",
    id: "ZWL008753"
  },
  {
    name: "OLD JAMMU, Jammu",
    id: "ZWL008047"
  },
  {
    name: "Channi Himmat, Jammu",
    id: "ZWL002687"
  },
  {
    name: "Shankar Nagar, Raipur",
    id: "ZWL003195"
  },
  {
    name: "Purena, Raipur",
    id: "ZWL009896"
  },
  {
    name: "Mowa, Raipur",
    id: "ZWL001038"
  },
  {
    name: "Mahaveer Nagar, Raipur",
    id: "ZWL008872"
  },
  {
    name: "Samta Colony, Raipur",
    id: "ZWL004310"
  },
  {
    name: "Civil Lines, Raipur",
    id: "ZWL006651"
  },
  {
    name: "Devendra Nagar, Raipur",
    id: "ZWL008695"
  },
  {
    name: "Moudhapara, Raipur",
    id: "ZWL008436"
  }
]

export default locations