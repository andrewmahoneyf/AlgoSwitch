import React from 'react';
import { db } from '../../firebase';
import withAuthorization from '../withAuthorization';
import '../../styles/Balances.scss';

class Balances extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_user: null,
    };
  }

  componentDidMount() {
    if (db.getCurrentUser()) {
      db.getCurrentUser().then(doc => this.setState(() => ({ current_user: doc })))
    }
  }
  render() {
    const { current_user } = this.state;

    return (
      <section className="balances">
        <div className="col-lg-12 py-4">
          <div className="panel panel-default text-white">
            <div className="panel-body">
              <table width="100%" className="table table-striped table-bordered table-hover dataTable no-footer dtr-inline w-100" id="dataTables-example" role="grid" aria-describedby="dataTables-example_info">
                <thead>
                  <tr role="row">
                    <th className="sorting_asc" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending">
                      Algo
                    </th>
                    <th className="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">
                      Coin
                    </th>
                    <th className="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">
                      Amount in wallet
                    </th>
                    <th className="sorting" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">
                      Amount on exchange
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="gradeA odd" role="row">
                    <td className="sorting_1">Ethhash</td>
                    <td>Ethereum (ETH)</td>
                    <td>1.7</td>
                    <td className="center">0</td>
                    <td className="center"></td>
                  </tr><tr className="gradeA even" role="row">
                    <td className="sorting_1">SHA 256</td>
                    <td>Bitcoin (BTC)</td>
                    <td>.8765</td>
                    <td className="center">0</td>
                    <td className="center"></td>
                  </tr><tr className="gradeA odd" role="row">
                    <td className="sorting_1">Equihash</td>
                    <td>Zcash (ZEC)</td>
                    <td>2.7668</td>
                    <td className="center">0</td>
                    <td className="center"></td>
                  </tr><tr className="gradeA even" role="row">
                    <td className="sorting_1">Cryptonight-Monero</td>
                    <td>Monero (XMR)</td>
                    <td>0</td>
                    <td className="center">1.9</td>
                    <td className="center cancel">Cancel</td>
                  </tr><tr className="gradeA odd" role="row">
                    <td className="sorting_1">Equihash</td>
                    <td>Bitcoin-Gold (BTG)</td>
                    <td>0</td>
                    <td className="center">.568</td>
                    <td className="center cancel">Cancel</td>
                  </tr><tr className="gradeA even" role="row">
                    <td className="sorting_1">NeoScrypt</td>
                    <td>Feathercoin (FTC)</td>
                    <td>0</td>
                    <td className="center">1.854</td>
                    <td className="center cancel">Cancel</td>
                  </tr><tr className="gradeA odd" role="row">
                    <td className="sorting_1">Lyra2RE2</td>
                    <td>Monacoin (MONA)</td>
                    <td>0</td>
                    <td className="center">10.47</td>
                    <td className="center cancel">Cancel</td>
                  </tr><tr className="gradeA even" role="row">
                    <td className="sorting_1">Sia</td>
                    <td>Siacoin (SIA)</td>
                    <td>0</td>
                    <td className="center">21.743</td>
                    <td className="center cancel">Cancel</td>
                  </tr><tr className="gradeA odd" role="row">
                    <td className="sorting_1">Scrypt</td>
                    <td>Verge (XVG)</td>
                    <td>0</td>
                    <td className="center">13.58</td>
                    <td className="center cancel">Cancel</td>
                  </tr><tr className="gradeA even" role="row">
                    <td className="sorting_1">Skein</td>
                    <td>Digibyte-Skein (DGB)</td>
                    <td>0</td>
                    <td className="center">17.554</td>
                    <td className="center cancel">Cancel</td>
                  </tr></tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Balances);