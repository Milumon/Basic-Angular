export class Pais{
    name: string;
    alpha3Code: string;
    capital: string;
    subregion: string;
    population: number;
    area: number;
    
    flag: string;
    altSpellings: string[];
    //regionalBlocs: any[];
    regionalBlocs: bloqueRegional[];
}

export class bloqueRegional{
    acronym: string;
    name: string;
}