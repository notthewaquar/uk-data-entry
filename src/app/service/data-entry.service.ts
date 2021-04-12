import {Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

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
    private http: HttpClient,
    private _snackBar: MatSnackBar
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
    console.log(allDataObj);
    return this.http.post(
      this.baseUrl + "/create.php",
      allDataObj
      // `
      // {
      //   "businessName": ${allDataObj.businessName},
      //   "businessCategory": ${allDataObj.businessCategory},
      //   "servicesOffered": ${allDataObj.servicesOffered},
      //   "desOfService": ${allDataObj.desOfService},
      //   "onlineService": ${allDataObj.onlineService},
      //   "addressLine1": ${allDataObj.addressLine1},
      //   "addressLine2": ${allDataObj.addressLine2},
      //   "addressLine3": ${allDataObj.addressLine3},
      //   "country": ${allDataObj.country},
      //   "postcode": ${allDataObj.postcode},
      //   "copmanyName": ${allDataObj.copmanyName},
      //   "companyAddress": ${allDataObj.companyAddress},
      //   "companyNumber": ${allDataObj.companyNumber},
      //   "nameOfContact": ${allDataObj.nameOfContact},
      //   "emailOfContactPerson": ${allDataObj.emailOfContactPerson},
      //   "telephoneNumber": ${allDataObj.telephoneNumber},
      //   "cellphoneNumber": ${allDataObj.cellphoneNumber},
      //   "email": ${allDataObj.email},
      //   "website": ${allDataObj.website},
      //   "fbAccount": ${allDataObj.fbAccount},
      //   "fbFollower": ${allDataObj.fbFollower},
      //   "instaAccount": ${allDataObj.instaAccount},
      //   "instaFollower": ${allDataObj.instaFollower},
      //   "twitterAccount": ${allDataObj.twitterAccount},
      //   "twitterFollower": ${allDataObj.twitterFollower},
      //   "youtubeChannel": ${allDataObj.youtubeChannel},
      //   "youtubeSubscriber": ${allDataObj.youtubeSubscriber},
      //   "pinterestAccount": ${allDataObj.pinterestAccount},
      //   "pinterestFollower": ${allDataObj.pinterestFollower},
      //   "primaryCatagory": ${allDataObj.primaryCatagory},
      //   "createdDate": ${allDataObj.createdDate},
      //   "updatedDate": ${allDataObj.updatedDate},
      // }
      // `
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
  getEachFDataPreviewModel(id) {
    // data = allDataEntryFormDATA
    let data;
    for (let i = 0; i < this.allDataEntryFormDATA.length; i++) {
      console.log(this.allDataEntryFormDATA[i].id)
      console.log(id)
      if (
        this.allDataEntryFormDATA[i].id === id + ''
      ) {
        data = this.allDataEntryFormDATA[i];
        return data;
      }
    }
    console.log(data)
    return data;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
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