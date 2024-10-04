import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>a dead simple api that returns status codes</h1>
        <ol>
          <li>
            make requests at <code>{`https://status-codes.vercel.app/api/status/{statusCode}`}</code>
          </li>
          <li>here's a list of accepted status codes:<br/>
            {`"100", "101", "102", "103", "200", "201", "202", "203", "204", "205", "206", "207", "208", "214", "226",
        "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407",
        "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "420", "421", "422", "423", "424",
        "425", "426", "428", "429", "431", "444", "450", "451", "497", "498", "499", "500", "501", "502", "503", "504",
        "506", "507", "508", "509", "510", "511", "521", "522", "523", "525", "530", "599"`.replace(/"/g, '')}
          </li>
          <li>
            if your status code doesn't belong in this list, you'll get 404
          </li>
        </ol>
        <Link href={'https://github.com/vinicius-el-khalili/status-codes'} target="_black" >
            {`github ->`}
        </Link>
      </main> 
    </div>
  );
}
