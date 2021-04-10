import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataEntryService {
  // baseUrl: string = "http://srvtechservices.com/api/User";
  baseUrl: string = "https://srvtechnology.com/api/User";
  token: string;
  
  dataEntryFormDATA: any = {};
  allDataEntryFormDATA: any = [];
  // dummyDate,
  // dummyDate2,

  constructor(
    private http: HttpClient
  ) {}
  // CREATE FORM
  getData() {
    return this.dataEntryFormDATA;
  }
  addNewFormData(dataObj: any) {
    this.dataEntryFormDATA = dataObj;
  }
  // DASHBOARD FORM
  getAllData() {
    return this.allDataEntryFormDATA;
  }
  getEachFormData(id: number) {
    // console.log(id);
    // for (let i = 0; i < this.allDataEntryFormDATA.length; i++) {
    //   this.allDataEntryFormDATA.id = ;
    // }
    // return this.allDataEntryFormDATA[id];
    return this.http.post<any>(
      this.baseUrl + "/search.php",
      `{
        "jwt": "${this.token}",
        "id": ${id}
      }`
    )
  }
  addNewAllFormData(allDataObj: any) {
    return this.http.post(
      this.baseUrl + "/create.php",
      allDataObj
    );
  }
  addAllFormDataApi(allDataObj) {
    this.allDataEntryFormDATA = allDataObj;
  }
  fetchAllData(jwtToken: string) {
    this.token = jwtToken;
    return this.http.post<any>(
      this.baseUrl + "/read.php",
      `{
        "jwt": "${jwtToken}"
      }`
    )
  }
  deleteOne(id: string) {
    return this.http.post<any>(
      this.baseUrl + "/delete.php",
      `{
        "jwt": "${this.token}",
        "id": ${id}
      }`
    )
  }
}
// const dummyDate = {
//   "businessName": "dfd333",
//   "businessCategory": "dfd444",
//   "servicesOffered": "dfd",
//   "desOfService": "dfd",
//   "onlineService": "dfd",
//   "addressLine1": "dfd",
//   "addressLine2": "dfd",
//   "addressLine3": "dfd",
//   "country": "dfd",
//   "postcode": "dfd",
//   "copmanyName": "dfd",
//   "companyAddress": "dfd",
//   "companyNumber": "dfd",
//   "nameOfContact": "dfd",
//   "emailOfContactPerson": "dfd",
//   "telephoneNumber": "dfd",
//   "cellphoneNumber": "dfd",
//   "email": "dfd@dfsdf.dsf",
//   "website": "dfd",
//   "fbAccount": "dfd",
//   "fbFollower": "dfd",
//   "instaAccount": "dfd",
//   "instaFollower": "dfd",
//   "twitterAccount": "dfd",
//   "twitterFollower": "dfd",
//   "youtubeChannel": "dfd",
//   "youtubeSubscriber": "dfd",
//   "pinterestAccount": "dfd",
//   "pinterestFollower": "dfd",
//   "primaryCatagory": "dfd",
//   "createdDate": "20-10-2020",
//   "updatedDate": "14-01-2021",
//   "id": "14-01-2021",
// }
// const dummyDate2 = {
//   "businessName": "dfd111",
//   "businessCategory": "dfd222",
//   "servicesOffered": "dfd",
//   "desOfService": "dfd",
//   "onlineService": "dfd",
//   "addressLine1": "dfd",
//   "addressLine2": "dfd",
//   "addressLine3": "dfd",
//   "country": "dfd",
//   "postcode": "dfd",
//   "copmanyName": "dfd",
//   "companyAddress": "dfd",
//   "companyNumber": "dfd",
//   "nameOfContact": "dfd",
//   "emailOfContactPerson": "dfd",
//   "telephoneNumber": "dfd",
//   "cellphoneNumber": "dfd",
//   "email": "dfd@dfsdf.dsf",
//   "website": "dfd",
//   "fbAccount": "dfd",
//   "fbFollower": "dfd",
//   "instaAccount": "dfd",
//   "instaFollower": "dfd",
//   "twitterAccount": "dfd",
//   "twitterFollower": "dfd",
//   "youtubeChannel": "dfd",
//   "youtubeSubscriber": "dfd",
//   "pinterestAccount": "dfd",
//   "pinterestFollower": "dfd",
//   "primaryCatagory": "dfd",
//   "createdDate": "20-10-2020",
//   "updatedDate": "14-01-2021",
//   "id": "14-01-2021",
// }