import http from './download';

// 下载地址块文件
export async function usedownexcel(
  request_time: string,
  request_time2: string
) {
  const res: any = await http.post('/excel', { request_time, request_time2 });
  console.log(res);
  return res;
}

// const download = async (request_time: string,request_time2: string) => {
//   await usedownload(request_time,request_time2).then(() => {
//     // flow为接口返回的文件流
//     const downloadFn = (flow = null) => {
//       if (!flow) return;
//       const blob = new Blob([flow]);
//       const blobUrl = window.URL.createObjectURL(blob);

//       const a = document.createElement("a");
//       a.style.display = "none";
//       a.download = "地址块" + request_time + ".xls"; // 自定义下载的文件名
//       a.href = blobUrl;
//       a.click();
//     };
//     downloadFn(address_download.value);
//   });
// };
