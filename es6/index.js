/** @format */

import 'babel-polyfill';
import * as AsyncApi from './api-async';

//----------------------------------------------------------------------------

async function userProcess() {
  const regRes = await AsyncApi.userReg();
  const authRes = await AsyncApi.userAuth(regRes.id);
  const dataRes = await AsyncApi.userData(authRes.token);
  return dataRes.data;
}

userProcess()
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));

//----------------------------------------------------------------------------
// import * as PromiseApi from './api-promise';

// PromiseApi.userReg()
//   .then((regRes) => PromiseApi.userReg(regRes.id))
//   .then((authRes) => PromiseApi.userData(authRes.token))
//   .then((dataRes) => console.log(dataRes.data))
//   .catch((err) => console.error(err));

//----------------------------------------------------------------------------

// CallbackApi.userReg(
//   (regRes) => {
//     console.log(regRes);

//     CallbackApi.userAuth(
//       regRes.id,
//       (authRes) => {
//         console.log(authRes);

//         CallbackApi.userData(
//           authRes.token,
//           (dataRes) => {
//             console.log(dataRes);
//             console.log(dataRes.data);
//           },
//           (err) => {
//             console.error(err);
//           }
//         );
//       },
//       (err) => {
//         console.error(err);
//       }
//     );
//   },
//   (err) => {
//     console.error(err);
//   }
// );
