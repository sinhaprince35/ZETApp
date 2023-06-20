import Head from "next/head";
import { Inter } from "next/font/google";
import styles from './index.module.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ZET : Become a certified financial Advisior and Earn Big</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/unnamed.ico" />
      </Head>
      {/* <----------------Brand Section------------> */}
      <div className={styles.container}>
        <div className={styles.financialBox}>
          <div className={styles.financialAdvisior}>
            <h1>
              Become a Financial Advisor and <span>Earn Rs.1 Lakh/Month</span>
            </h1>
            <p>No investment required</p>
            <div className={styles.googlePlay}>
              <img src="https://zetapp.in/_next/static/media/downloadBtnDark.a0f01343.svg" />
            </div>
          </div>
          <div className={styles.finacialBoxRight}>
            <img
              src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHeroImgNew.d1d917dd.png&w=750&q=75"
              alt="Man Image"
            />
          </div>
        </div>
      </div>

      <div className={styles.brandBox}>
        <div className={styles.brands}>
          <p className={styles.title}>Top Brands on ZET</p>
          <p className={styles.subTitle}>
            {" "}
            We are trusted by best brand in the country
          </p>
        </div>
        <div className={styles.carousel}>
          <div className={styles.sliderList}>
            <div className={styles.slider1}>
              <img src="../../assets/au.png" className={styles.crouselimage} />
            </div>
            <div className={styles.slider1}>
              <img src="../../assets/bob.png" className={styles.crouselimage} />
            </div>
            <div className={styles.slider1}>
              <img
                src="../../assets/icici.png"
                className={styles.crouselimage}
              />
            </div>
            <div className={styles.slider1}>
              <img
                src="../../assets/bajaj.png"
                className={styles.crouselimage}
              />
            </div>
            <div className={styles.slider1}>
              <img
                src="../../assets/American-Express-Color.png"
                className={styles.crouselimage}
              />
            </div>
            <div className={styles.slider1}>
              <img
                src="../../assets/indsuind.png"
                className={styles.crouselimage}
              />
            </div>
            <div className={styles.slider1}>
              <img
                src="../../assets/standardCharted.png"
                className={styles.crouselimage}
              />
            </div>
            <div className={styles.slider1}>
              <img src="../../assets/yes.png" className={styles.crouselimage} />
            </div>
            <div className={styles.slider1}>
              <img
                src="../../assets/idfc.jpg"
                className={styles.crouselimage}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <----------------Products Section-------------> */}
      <div className={styles.productsContainer}>
        <div className={styles.productsTitle}>
          <p className={styles.productsTitle1}>Products on ZET</p>
          <p className={styles.productsSubTitle1}>
            We are trusted by best brand in the country
          </p>
        </div>
        <div className={styles.productsBox}>
          <div className={styles.productBoxContainer}>
            <div className={styles.productImage}>
              <img
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCC.28aa750d.png&w=828&q=75"
                alt="image"
                className={styles.innerImage}
              />
            </div>
            <div className={styles.productText}>
              <p className={styles.para}>CREDIT CARDS</p>
              <p className={styles.para1}>
                100% Contactless Application Process with Instant Approval From
                Top Banks.
              </p>
            </div>
          </div>
          <div className={styles.productBoxContainer}>
            <div className={styles.productImage}>
              <img
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLoan.cadd88a9.png&w=828&q=75"
                alt="image"
                className={styles.innerImage}
              ></img>
            </div>
            <div className={styles.productText}>
              <p className={styles.para}>LOANS</p>
              <p className={styles.para1}>
                100% online process. Instant offers. Affordable Rate of Interest
                on loans.
              </p>
            </div>
          </div>
          <div className={styles.productBoxContainer}>
            <div className={styles.productImage}>
              <img
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBNPL.3974f2b2.png&w=828&q=75"
                alt="image"
                className={styles.innerImage}
              ></img>
            </div>
            <div className={styles.productText}>
              <p className={styles.para}>BUY NOW PAY LATER</p>
              <p className={styles.para1}>
                Short-term financing that allows consumers to make purchases and
                pay for them over time.
              </p>
            </div>
          </div>
          <div className={styles.productBoxContainer}>
            <div className={styles.productImage}>
              <img
                src="https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAccountSave.69831c7c.png&w=828&q=75"
                alt="image"
                className={styles.innerImage}
              />
            </div>
            <div className={styles.productText}>
              <p className={styles.para}>SAVING ACCOUNTS</p>
              <p className={styles.para1}>
                ZET offers range of savings account that suits your personal
                needs for the banking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
