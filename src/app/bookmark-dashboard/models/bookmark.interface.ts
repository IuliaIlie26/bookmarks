export interface Bookmark {
    id: number,
    title: string,
    url: string,
    description: string,
    favorite: boolean
  //  tags?: string[]
}
//la interfete poti sa pui ? ca sa nu fie obligatorii
//iti trebuie export ca sa fie available pentru modulul tau. iti cam trebuie export la tot ce vrei sa fie public 