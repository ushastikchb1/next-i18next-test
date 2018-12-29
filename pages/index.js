import React from "react";
import Head from "next/head";
import { withNamespaces } from "../i18n";

export default withNamespaces("common")(
  class Index extends React.Component {
    static async getInitialProps() {
      return {
        namespacesRequired: ["common"],
      }
    }

    render() {
      const { t, i18n } = this.props;
      const { allLanguages }  = i18n.options;

      return (
        <div>
          <Head>
            <title>{t("title")}</title>
          </Head>
          <div id="main">
            {allLanguages &&
            <select value={this.props.lng} onChange={(event) => i18n.changeLanguage(event.target.value)}>
              {allLanguages.map((lng) =>
                <option key={lng} value={lng}>{lng}</option>
              )}
            </select>
            }
          </div>
        </div>
      )
    }
  }
);