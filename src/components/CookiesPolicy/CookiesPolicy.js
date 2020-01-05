import React from 'react';
import { withLocalize } from 'react-localize-redux';

const CookiesPolicy = ({ languages, activeLanguage, setActiveLanguage }) => {
  const cookiesPL = (
    <>
      <h2>Polityka cookies</h2>
      Strona internetowa www.escalapoland.com wykorzystuje pliki „cookies”,
      które pozwalają na zapamiętanie wybranych informacji o jego użytkownikach
      i ich preferencjach. Za ich pomocą nie są jednak przetwarzane lub
      przechowywane dane osobowe.
      <h3>Co to jest „cookies”?</h3>
      <ul>
        <li>
          Pliki cookies to niewielkie pliki tekstowe wysyłane i przechowywane na
          komputerze użytkownika, smartfonie czy innym urządzeniu, z którego
          łączy się z Internetem.
        </li>
        <li>
          Pliki cookies pobierane są za pośrednictwem przeglądarki internetowej
          podczas pierwszego wejścia na stronę.
        </li>
        <li>
          Pliki cookies nie powodują zmian konfiguracyjnych w urządzeniu, z
          którego korzysta użytkownik; pliki pomagają w dostosowaniu zawartości
          strony internetowej do oczekiwań, ułatwiają nawigację na stronach i
          zapewniają skuteczność procedur bezpieczeństwa.
        </li>
        <li>
          Pliki cookies pozwalają ocenić, jakie są upodobania użytkowników, a
          także jak można ulepszać stronę internetową.
        </li>
      </ul>
      Użytkownik, który nie życzy sobie wykorzystywania plików „cookies” w
      opisanym powyżej celu, ma możliwość skonfigurowania ustawień
      oprogramowania zainstalowanego w urządzeniu tj. wykorzystywanej
      przeglądarki internetowej lub aplikacji w sposób uniemożliwiający
      przechowywanie wspomnianych plików w pamięci komputera. W każdej chwili
      może również usunąć je ręcznie. W celu zapoznania się ze szczegółową
      instrukcją postępowania prosimy o odwiedzenie strony internetowej
      producenta używanej przeglądarki internetowej.
      <h3>Typy „cookies” - cel ich uzyskiwania i przechowywania</h3>
      <ul>
        <li>
          Konieczne do poprawnego działania stron - niezbędne do prawidłowego
          funkcjonowania strony www.escalapoland.com pozwalają na poruszanie się
          po niej oraz używanie jej elementów, m.in. zapamiętują poprzednie
          czynności podczas powrotu na tę samą stronę czy wypełniania
          formularzy.
        </li>
        <li>
          Poprawiające wydajność - zbierają informacje na temat sposobu
          korzystania przez użytkowników ze strony www.escalapoland.com : z
          jakich obszarów korzystają, ile czasu na nich spędzają itp. Dzięki tym
          informacjom możliwe jest poprawianie działania stron oraz badanie
          potrzeb użytkowników.
        </li>
        <li>
          Poprawiające funkcjonalność - zapamiętywanie ustawień i wyborów
          użytkownika. .
        </li>
        <li>
          Statystyczne - tworzenie anonimowych statystyk służących do
          poprawiania funkcjonalności i zawartości stron.
        </li>
      </ul>
      Używając ciasteczek w wyżej opisany sposób nigdy nie identyfikujemy
      tożsamości użytkowników na podstawie informacji przechowywanych w
      ciasteczkach.
    </>
  );

  const cookiesENG = (
    <>
      <h2>Cookie policy</h2>
      <b>Last updated September 08, 2019</b>

      <p>
        This Cookie Policy explains how Escala Poland uses cookies and similar
        technologies to recognize you when you visit our website at
        https://escalapoland.com. It explains what these technologies are and
        why we use them, as well as your rights to control our use of them.
      </p>

      <p>
        In some cases we may use cookies to collect personal information, or
        that becomes personal information if we combine it with other
        information.
      </p>

      <h3>What are cookies?</h3>

      <p>
        Cookies are small data files that are placed on your computer or mobile
        device when you visit a website. Cookies are widely used by website
        owners in order to make their websites work, or to work more
        efficiently, as well as to provide reporting information.{' '}
      </p>

      <p>
        Cookies set by the website owner are called "first party cookies".
        Cookies set by parties other than the website owner are called "third
        party cookies". Third party cookies enable third party features or
        functionality to be provided on or through the website (e.g. like
        advertising, interactive content and analytics). The parties that set
        these third party cookies can recognize your computer both when it
        visits the website in question and also when it visits certain other
        websites.
      </p>

      <h3>Why do we use cookies?</h3>

      <p>
        We use first and third party cookies for several reasons. Some cookies
        are required for technical reasons in order for our Websites to operate,
        and we refer to these as "essential" or "strictly necessary" cookies.
        Other cookies also enable us to track and target the interests of our
        users to enhance the experience on our Online Properties. Third parties
        serve cookies through our Websites for advertising, analytics and other
        purposes. This is described in more detail below.
      </p>

      <p>
        The specific types of first and third party cookies served through our
        Websites and the purposes they perform are described below (please note
        that the specific cookies served may vary depending on the specific
        Online Properties you visit)
      </p>

      <h3>How can I control cookies?</h3>
      <p>
        You have the right to decide whether to accept or reject cookies. You
        can exercise your cookie rights by setting your preferences in the
        Cookie Consent Manager. The Cookie Consent Manager allows you to select
        which categories of cookies you accept or reject. Essential cookies
        cannot be rejected as they are strictly necessary to provide you with
        services.
      </p>
      <p>
        The Cookie Consent Manager can be found in the notification banner and
        on our website. If you choose to reject cookies, you may still use our
        website though your access to some functionality and areas of our
        website may be restricted. You may also set or amend your web browser
        controls to accept or refuse cookies. As the means by which you can
        refuse cookies through your web browser controls vary from
        browser-to-browser, you should visit your browser's help menu for more
        information. In addition, most advertising networks offer you a way to
        opt out of targeted advertising. If you would like to find out more
        information, please visit{' '}
        <a href="http://www.aboutads.info/choices/" target="_blank">
          http://www.aboutads.info/choices/
        </a>{' '}
        or{' '}
        <a href="http://www.youronlinechoices.com" target="_blank">
          http://www.youronlinechoices.com
        </a>
        .
      </p>
    </>
  );
  //   Thats a workaround for react-localize-redux plugin - it won't work with activeLanguage without languages.map function.
  return languages.map((lang, i) => {
    if (i === 0) {
      return activeLanguage.code === 'pl' ? cookiesPL : cookiesENG;
    }
    return null;
  });
};

export default withLocalize(CookiesPolicy);
