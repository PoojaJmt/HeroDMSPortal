import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import InvoicesComponent from './Invoices/InvoicesComponent';
import InvoiceInfo from './Invoices/invoiceInfo';
import InvoiceDownload from './Invoices/downloadInvoice';
import ClaimInfo from './schemeclaims/claimInfo'
import ProductList from './products/productList';
import ProductInfo from './products/productInfo';
import SchemeList from '../routes/schemeclaims/schemeList';
import CustomerComponent from './customers/customers';
import CustomerInfo from './customers/customerInfo';
import CustomerDetails from './customers/customerDetails';
import ComplaintsList from './complaints/complaintsList';
import ComplaintInfo from './complaints/complaintInfo';
import NewComplaint from './complaints/newComplaint';
import DashboardComponent from './dashboard/DashboardComponent'
import Home from './home/home'
import Schemes from '../routes/home/schemes'
import SchemeInfo from '../routes/home/schemeInfo'
import OrdersList from '../routes/orders/ordersList'
import NewOrders from '../routes/orders/newOrders'
import ViewCart from './orders/viewCart';
import ProfileData from '../routes/profile/profile'
import StockStatus from '../routes/home/stockStatus'
import Outstanding from '../routes/home/outstanding';

// const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                {/* <Route exact path={SLUGS.home} component={DashboardComponent} /> */}
                {/* <Route exact path={SLUGS.overviewTwo} render={() => <div>overviewTwo</div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div>overviewThree</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>overview</div>} /> */}
                <Route exact path={SLUGS.invoices} component={InvoicesComponent} />
                <Route exact path={SLUGS.invoicedownload} component={InvoiceDownload}/>
                <Route exact path={SLUGS.invoiceInfo} component={InvoiceInfo}/>
                <Route exact path={SLUGS.products} component={ProductList} />
                <Route exact path={SLUGS.productInfo} component={ProductInfo}/>
                <Route exact path={SLUGS.scheme} component={SchemeList}/>             
                <Route exact path={SLUGS.ClaimInfo} component={ClaimInfo}/>
                <Route exact path={SLUGS.customers} component={CustomerComponent}/>
                <Route exact path={SLUGS.customerInfo} component={CustomerInfo}/>
                <Route exact path={SLUGS.customerDetails} component={CustomerDetails}/>
                <Route exact path={SLUGS.complaints} component={ComplaintsList}/>
                <Route exact path={SLUGS.complaintInfo} component={ComplaintInfo}/>
                <Route exact path={SLUGS.newComplaint} component={NewComplaint}/>
                <Route exact path={SLUGS.DashboardComponent} component={DashboardComponent}/>
                <Route exact path={SLUGS.profile} render={() => <div>profile</div>} />
                {/* <Redirect to={SLUGS.home} component={Home}/> */}
                <Route exact path={SLUGS.home} component={Home}/>
                <Route exact path={SLUGS.schemes} component={Schemes}/>
                <Route exact path={SLUGS.schemeInfo} component={SchemeInfo}/>
                <Route exact path={SLUGS.ordersList} component={OrdersList}/>
                <Route exact path={SLUGS.newOrders} component={NewOrders}/>
                <Route exact path={SLUGS.viewCart} component={ViewCart}/>
                <Route exact path={SLUGS.profileData} component={ProfileData}/>
                <Route exact path={SLUGS.stockStatus} component={StockStatus}/>
                <Route exact path={SLUGS.outstnding} component={Outstanding}/>





            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
