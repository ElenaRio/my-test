import styles from './Cart.module.scss';
import PromotionTimer from './PromotionTimer';

function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.boxWrapper}>
        <div className={styles.box}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
              <path
                fill="#09244B"
                d="M14.594 2.897a4 4 0 0 0-5.189 0l-.376.32a2 2 0 0 1-1.138.472l-.493.04a4 4 0 0 0-3.67 3.669l-.039.493a2 2 0 0 1-.471 1.138l-.321.376a4 4 0 0 0 0 5.19l.32.376a2 2 0 0 1 .472 1.138l.04.493a4 4 0 0 0 3.669 3.67l.493.039a2 2 0 0 1 1.138.471l.376.32a4 4 0 0 0 5.19 0l.376-.32a2 2 0 0 1 1.138-.471l.493-.04a4 4 0 0 0 3.67-3.669l.038-.493a2 2 0 0 1 .472-1.138l.32-.377a4 4 0 0 0 0-5.189l-.32-.376a2 2 0 0 1-.472-1.138l-.039-.493a4 4 0 0 0-3.669-3.67l-.493-.039a2 2 0 0 1-1.138-.471zM10.703 4.42a2 2 0 0 1 2.594 0l.377.321a4 4 0 0 0 2.276.943l.493.04a2 2 0 0 1 1.834 1.834l.04.493a4 4 0 0 0 .943 2.276l.32.377a2 2 0 0 1 0 2.594l-.32.377a4 4 0 0 0-.943 2.276l-.04.493a2 2 0 0 1-1.834 1.834l-.493.04a4 4 0 0 0-2.276.943l-.377.32a2 2 0 0 1-2.594 0l-.377-.32a4 4 0 0 0-2.276-.943l-.493-.04a2 2 0 0 1-1.835-1.834l-.04-.493a4 4 0 0 0-.942-2.276l-.32-.377a2 2 0 0 1 0-2.594l.32-.377a4 4 0 0 0 .943-2.276l.04-.493a2 2 0 0 1 1.834-1.835l.493-.039a4 4 0 0 0 2.276-.943zm5.004 5.288a1 1 0 1 0-1.414-1.414l-6 6a1 1 0 1 0 1.414 1.414zM11 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
              />
            </g>
          </svg>
          <div className={styles.text}>
            <p>Новинка</p>
            <p>2025 року</p>
          </div>
        </div>

        <div className={styles.box}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" fillRule="nonzero">
              <path d="M0 0h24v24H0z" />
              <path
                fill="#09244B"
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v1h2a1 1 0 0 1 .117 1.993L15 10h-5a.5.5 0 0 0-.09.992L10 11h4a2.5 2.5 0 0 1 .164 4.995L14 16h-1v1a1 1 0 0 1-1.993.117L11 17v-1H9a1 1 0 0 1-.117-1.993L9 14h5a.5.5 0 0 0 .09-.992L14 13h-4a2.5 2.5 0 0 1-.164-4.995L10 8h1V7a1 1 0 0 1 1-1"
              />
            </g>
          </svg>
          <div className={styles.text}>
            <p>Оплата</p>
            <p>після перевірки</p>
          </div>
        </div>

        <div className={styles.box}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
              <path
                fill="#09244B"
                d="M12.987 5.74a2 2 0 1 0-1.97.002l-.01.018c-.655 1.367-1.565 3.325-2.97 4.06-1.154.603-2.81.3-4.04.074a1.5 1.5 0 1 0-1.772 1.58l2.948 7.61A3 3 0 0 0 7.97 21h8.06a3 3 0 0 0 2.797-1.916l2.947-7.61a1.5 1.5 0 1 0-1.767-1.624c-1.259.163-2.882.371-4.044-.236-1.377-.72-2.3-2.543-2.976-3.874m-.962 2.367c.768 1.246 1.689 2.587 3.012 3.28 1.327.693 2.96.658 4.42.533l-2.495 6.441a1 1 0 0 1-.932.639H7.97a1 1 0 0 1-.932-.639l-2.461-6.353c1.439.184 3.067.274 4.386-.416 1.378-.72 2.3-2.172 3.062-3.485"
              />
            </g>
          </svg>
          <div className={styles.text}>
            <p>Швидка</p>
            <p>доставка</p>
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <h2>Мереживна накидка</h2>
      </div>
      <div className={styles.img}>
        <img src="/work.png" alt="name" />
      </div>
      <div className={styles.boxContent}>
        <div className={styles.description}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" fillRule="nonzero">
              <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
              <path
                fill="#09244B"
                d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3h12Zm0 2H6a1 1 0 0 0-.993.883L5 6v12a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18V6a1 1 0 0 0-.883-.993L18 5Zm-8.121 5.293L12 12.414l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.829 2.829a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 1 1 1.415-1.414Z"
              />
            </g>
          </svg>
          <p>Якісний гіпоалергенний матеріал</p>
        </div>
        <div className={styles.description}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" fillRule="nonzero">
              <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
              <path
                fill="#09244B"
                d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3h12Zm0 2H6a1 1 0 0 0-.993.883L5 6v12a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18V6a1 1 0 0 0-.883-.993L18 5Zm-8.121 5.293L12 12.414l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.829 2.829a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 1 1 1.415-1.414Z"
              />
            </g>
          </svg>
          <p>Вирівнюванняб приховування недоліків</p>
        </div>
        <div className={styles.description}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" fillRule="nonzero">
              <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
              <path
                fill="#09244B"
                d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3h12Zm0 2H6a1 1 0 0 0-.993.883L5 6v12a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18V6a1 1 0 0 0-.883-.993L18 5Zm-8.121 5.293L12 12.414l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.829 2.829a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 1 1 1.415-1.414Z"
              />
            </g>
          </svg>
          <p>Акція -50 грн на другу покупку</p>
        </div>
      </div>
      <div className={styles.time}>
        <PromotionTimer />
        <div className={styles.price}>
          <div>
            <p>Звичайна ціна</p>
            <b className={styles.strike}>275 грн</b>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <g fill="none" fillRule="nonzero">
              <path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
              <path
                fill="#09244B"
                d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3h12Zm0 2H6a1 1 0 0 0-.993.883L5 6v12a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18V6a1 1 0 0 0-.883-.993L18 5Zm-8.121 5.293L12 12.414l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.829 2.829a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 1 1 1.415-1.414Z"
              />
            </g>
          </svg>
          <div>
            <p>Ціна за акцією</p>
            <b>249 грн</b>
          </div>
        </div>
        <div className={styles.btn}>
          <button>Замовити зараз</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
