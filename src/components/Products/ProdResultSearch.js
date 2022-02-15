import {Divider} from "primereact/divider";
import {useContext} from "react";
import ProductContext from "../../context/Product/ProductContext";
import NumberFormat from 'react-number-format';
import {Link} from "react-router-dom";

const ProdResultSearch = (props) => {
    const {
        listResponseSearch
    } = useContext(ProductContext);
    return (
        <>
            <div className="prod-tags">
                <span>
                    Electronica, Audio y Video&nbsp;>&nbsp;
                </span>
                <span className="word-search">
                    {
                        props.wordSearch
                    }
                </span>
            </div>
            <div className="grid-result">
                {
                    Object.entries(listResponseSearch).map((data) => {
                        return (
                            <div className="grid" key={data[0]}>
                                <div className="col-12 md:col-6 lg:col-3">
                                    <Link to={
                                        {
                                            pathname: `/items/${data[1].id}`,
                                            state: {word_search: props.wordSearch}
                                        }
                                    }>
                                        <img
                                            src={data[1].thumbnail}
                                            className="img-product"
                                        />
                                    </Link>
                                </div>
                                <div className="col-12 md:col-6 lg:col-6">
                                    <div className="prod-price">
                                        <b>
                                            {
                                                <NumberFormat
                                                    thousandsGroupStyle="thousand"
                                                    value={data[1].price}
                                                    prefix="$"
                                                    decimalSeparator="."
                                                    displayType="text"
                                                    type="text"
                                                    thousandSeparator={true}
                                                    allowNegative={true}
                                                />
                                            }
                                        </b>
                                        <img src="/ic_shipping.png"/>
                                    </div>
                                    <div>
                                        <b>
                                            {
                                                data[1].title
                                            }
                                        </b>
                                    </div>
                                </div>
                                <div className="col-12 md:col-6 lg:col-3">
                                    <div className="prod-ubication">
                                        {
                                            data[1].address.city_name
                                        }
                                    </div>
                                </div>
                                <Divider/>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
export default ProdResultSearch;