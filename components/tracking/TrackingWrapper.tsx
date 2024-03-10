import Script from "next/script";
export default function TrackingWrapper() {
  return (
    <>
      <Script type ="text/javascript" src={process.env.NEXT_PUBLIC_MOUSEFLOW_URL as string} defer></Script>
      <Script type="text/javascript" id="hs-script-loader" async defer src={process.env.NEXT_PUBLIC_HUBSPOT_URL as string}></Script>
    </>
  )
}