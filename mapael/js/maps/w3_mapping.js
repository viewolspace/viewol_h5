var array = [[2,3,802],[4,5,800],[6,7,792],[8,9,781],[10,11,766],[12,13,796],[14,15,797],[16,17,786],[18,19,775],[20,21,787],[22,23,776],[24,25,762],[26,27,763],[28,29,770],[30,31,771],[32,33,791],[34,35,794],[36,37,803],[38,39,782],[40,41,756],[42,43,746],[44,45,677],[46,47,684],[48,49,697],[50,51,740],[52,53,727],[54,55,728],[56,57,741],[58,59,742],[60,61,751],[62,63,752],[64,65,795],[66,67,748],[68,69,749],[70,71,737],[72,73,714],[74,75,715],[76,77,],[78,79,708],[80,81,729],[82,83,717],[84,85,718],[86,87,694],[88,89,695],[90,91,696],[92,93,779],[94,95,703],[96,97,726],[98,99,750],[100,101,716],[102,103,683],[104,105,676],[106,107,675],[108,109,725],[110,111,741],[112,113,678],[114,115,793],[116,117,769],[118,119,745],[120,121,733],[122,123,721],[124,125,722],[126,127,712],[128,129,711],[130,131,701],[132,133,702],[134,135,688],[136,137,687],[138,139,789],[140,141,799],[142,143,798],[144,145,777],[146,147,764],[148,149,783],[150,151,772],[152,153,759],[154,155,705],[156,157,706],[158,159,692],[160,161,693],[162,163,681],[164,165,682],[166,167,732],[168,169,778],[170,171,765],[172,173,768],[174,175,747],[176,177,723],[178,179,724],[180,181,710],[182,183,713],[184,185,699],[186,187,700],[188,189,686],[190,191,689],[192,193,],[194,195,720],[196,197,719],[198,199,730],[200,201,744],[202,203,743],[204,205,754],[206,207,753],[208,209,785],[210,211,774],[212,213,761],[214,215,784],[216,217,773],[218,219,760],[220,221,704],[222,223,690],[224,225,691],[226,227,679],[228,229,680],[230,231,788],[232,233,801],[234,235,780],[236,237,739],[238,239,767],[240,241,736],[242,243,738],[244,245,807],[246,247,810],[248,249,812],[250,251,809],[252,253,804],[254,255,811],[256,257,805],[258,806],[259,260,816],[261,262,815],[263,264,817],[265,266,813],[267,268,814],[271,272,734],[273,274,790],[275,276,757],[277,278,758],[279,280,755],[281,282,834],[283,284,833],[285,286,830],[287,288,827],[289,290,823],[291,292,832],[293,294,831],[295,296,829],[297,298,828],[299,300,825],[301,302,824],[303,304,822],[305,306,821],[307,308,820],[309,310,819],[311,312,844],[313,314,845],[315,316,835],[317,318,838],[319,320,839],[321,322,840],[323,324,841],[325,326,842],[327,328,843],[329,330,836],[331,332,837],[333,334,826],[335,336,685],[337,338,818],[339,340,735]];

var map_1 = {};

var map_2 = {};

for(i=0;i<array.length;i++){
	var temps = array[i];
	map_1[temps[0]] = temps[2];
	map_1[temps[1]] = temps[2];
	map_2[temps[2]] = temps[0] + "," + temps[1];
}