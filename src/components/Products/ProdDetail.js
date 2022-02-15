import {useContext} from "react";
import ProductContext from "../../context/Product/ProductContext";
import NumberFormat from "react-number-format";
import {Button} from "primereact/button";
import {useHistory} from "react-router-dom";

const ProdDetail = (props) => {
    const routerHistory = useHistory();
    const {
        product,
        detailProduct
    } = useContext(ProductContext);
    /***
     * Method back page
     */
    const backPage = () => {
        routerHistory.push(`/items?search=${props.wordSearch}`);
    }
    return (
        <>
            <div className="prod-tags">
                <span className="btn-back-detail">
                        <Button
                            icon="pi pi-angle-double-left"
                            className="p-button-rounded p-button-text p-button-plain"
                            onClick={backPage}
                        />
                </span>
                <span>
                    Electronica, Audio y Video&nbsp;>&nbsp;
                </span>
                <span className="word-search">
                    {
                        props.wordSearch
                    }
                </span>
            </div>
            <div className="grid-result grid-detail-prod">
                <div className="grid">
                    <div className="col-12 md:col-6 lg:col-9">
                        <img src={
                            (typeof product.pictures === "undefined") ? product.thumbnail : product.pictures[0]['url']
                        } className="img-detail-prod"/>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <div className="product-sub-title">
                            <span>
                                {
                                    product.warranty
                                }
                            </span>
                        </div>
                        <div className="product-title-detail">
                            <b>
                                {
                                    product.title
                                }
                            </b>
                        </div>
                        <div className="product-price">
                            {
                                <NumberFormat
                                    thousandsGroupStyle="thousand"
                                    value={product.price}
                                    prefix="$"
                                    decimalSeparator="."
                                    displayType="text"
                                    type="text"
                                    thousandSeparator={true}
                                    allowNegative={true}
                                />
                            }
                        </div>
                        <div>
                            <Button
                                label="Comprar"
                                className="p-button-raised p-button-info btn-buy"/>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <div className="col-12 md:col-12 lg:col-12">
                        <article>
                            <b>Descripción del producto</b>
                            <p>
                                {
                                    detailProduct.plain_text
                                }
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProdDetail;