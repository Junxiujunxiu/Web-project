/* eslint-disable no-dupe-keys */
import axios from "axios";

export async function signUp(registrationData: any) {
  const iusername = registrationData.username;
  const ipassword = registrationData.password;
  delete registrationData.username;
  delete registrationData.password;
  delete registrationData.confirm_password;
  console.log(registrationData);
  return await axios.post(
    "/auth/register",
    { registrationData },
    {
      params: {
        username: iusername,
        password: ipassword,
      },
    }
  );
}

export async function signIn(iusername: string, ipassword: string) {
  return await axios.post("/auth/signIn", {
    username: iusername,
    password: ipassword,
  });
}

export async function getUserAttributes(iaccessToken: string) {
  return await axios.get("/auth/getUserAttributes", {
    params: { accessToken: iaccessToken },
  });
}

export async function updateUserAttributes(
  iusername: string,
  iuserAttributes: any
) {
  return await axios.post("/auth/updateUserAttributes", iuserAttributes, {
    params: {
      username: iusername,
    },
  });
}

export async function getSignedCookies() {
  axios
    .post("/auth/issueSignedCookies", {
      headers: {
        Accept: "*/*",
      },
      data: {
        token:
          "eyJraWQiOiJyTVJXd3ZlQjB0N2RnOXFYU0ZFTzMrekRwOXd5bjNBalwvTDEzbnhNZDNhMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjNDRhYmY3MS01ZWYwLTQ2N2UtYTc3MC0xM2M1M2Y2ZWJiZmQiLCJjb2duaXRvOmdyb3VwcyI6WyJhdXRjc2Ffc3RhbmRhcmRfdXNlcnMiXSwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMi5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMl9lZFRBYmhJTFMiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdHVzZXIiLCJvcmlnaW5fanRpIjoiNTE3NGQ4ODAtZGEzNS00OGI3LWI1MmMtMmYzMjVmMmY2MjhhIiwiYXVkIjoiNXRtNGVycGg2cDJlOTRnM2oyOWJqZmprdTEiLCJldmVudF9pZCI6IjIwZDVlZWI1LTliNzMtNGVmNC1iMDJjLTgwZTk0ZTkwYmQwNyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjc0OTY3Njg5LCJleHAiOjE2NzQ5NzEyODksImlhdCI6MTY3NDk2NzY4OSwianRpIjoiNmJhMzM2Y2ItNzg5Mi00OTc0LTlmMzMtNjNkZDZiNDg3MzhhIiwiZW1haWwiOiJ0ZXN0dXNlckBhdXRjc2Fuei5jb20ifQ.hHgtBeOZV8EOM6vyeA1lp-jRT5GMDD5765goT3F1bUfl2fUgTFxcbxKrBccE1Ki7GKPklaluprmTMUZNKELchaa3aVUfKMG2fjfrAniwiddCWtwJMCtgphN0J_OhKnpVG_rNO4y1-vGab2aLhk7YZWOo8-WJX-s7-gjaYGeFZA26ywSt9tJyzxxpIaDM08yilOHZPyh2rFYNxu2U3n4o15WgR5xIKm1_ePJy7LgZD2_56x430jKcFS4B20_T9G83rYVxNBuoDLOPRhGA-f_HON71FQBhIFjkLgvQm8Au_N2Ly4-8eNFDDMbrtYx_W7yGraoq0Eo4xIUiPiBZnO1kjQ",
      },
    })
    .then(function (res: any) {
      console.log(res.data.data);
      document.cookie =
        "CloudFront-Key-Pair-Id=" +
        res.data.data["CloudFront-Key-Pair-Id"] +
        "; path=/; domain=d1lsrt67f4djpu.cloudfront.net";
      document.cookie =
        "CloudFront-Policy=" +
        res.data.data["CloudFront-Policy"] +
        "; path=/; domain=d1lsrt67f4djpu.cloudfront.net";
      document.cookie =
        "CloudFront-Signature=" +
        res.data.data["CloudFront-Signature"] +
        "; path=/; domain=d1lsrt67f4djpu.cloudfront.net";
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export async function getUserGroup(iaccessToken: string) {
  return await axios.post("/auth/getUserGroup", iaccessToken);
}

export async function getRestrictedContent() {
  axios
    .get("https://d1lsrt67f4djpu.cloudfront.net/Ra2.ico", {})
    .then(function (res: any) {
      console.log(res);
    })
    .catch(function (error: any) {
      console.log(error);
    });
}
