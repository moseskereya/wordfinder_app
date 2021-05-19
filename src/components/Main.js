import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import Nav from './Nav';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const responsive = {
            myResponsiveRules: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                partialVisibilityGutter: 40
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 3,
                partialVisibilityGutter: 30
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                partialVisibilityGutter: 30
            }
        }

        const wordslist = this.props.WordsList;
        const group_1 = wordslist.splice(0, 99);
        const group_2 = wordslist.splice(100, 199);
        const group_3 = wordslist.splice(200, 199);
        const group_4 = wordslist.splice(300, 399);
        const group_5 = wordslist.splice(400, 499);
        const group_6 = wordslist.splice(500, 599);
        const group_7 = wordslist.splice(600, 699);
        const group_8 = wordslist.splice(700, 799);
        const group_9 = wordslist.splice(800, 899);
        const group_10 = wordslist.splice(900, 999);
        const group_11 = wordslist.splice(1000, 1099);
        const group_12 = wordslist.splice(1100, 1199);
        const group_13 = wordslist.splice(1200, 1299);
        const group_14 = wordslist.splice(1300, 1399);
        const group_15 = wordslist.splice(1400, 1499);
        const group_16 = wordslist.splice(1500, 1599);
        const group_17 = wordslist.splice(1600, 1699);
        const group_18 = wordslist.splice(1700, 1799);
        const group_19 = wordslist.splice(1800, 1899);
        const group_20 = wordslist.splice(1900, 1999);
        const group_21 = wordslist.splice(2000, 2099);
        const group_22 = wordslist.splice(2100, 2199);
        const group_23 = wordslist.splice(2200, 2299);
        const group_24 = wordslist.splice(2300, 2399);
        const group_25 = wordslist.splice(2400, 2499);
        const group_26 = wordslist.splice(2500, 2599);
        const group_27 = wordslist.splice(2600, 2699);
        const group_28 = wordslist.splice(2700, 2799);
        const group_29 = wordslist.splice(2800, 2899);
        const group_30 = wordslist.splice(2900, 2999);
        const group_31 = wordslist.splice(3000, 3099);
        const group_32 = wordslist.splice(3100, 3199);
        const group_33 = wordslist.splice(3200, 3299);
        const group_34 = wordslist.splice(3300, 3399);
        const group_35 = wordslist.splice(3400, 3499);
        const group_36 = wordslist.splice(3500, 3599);
        const group_37 = wordslist.splice(3600, 3699);
        const group_38 = wordslist.splice(3700, 3799);
        const group_39 = wordslist.splice(3800, 3899);
        const group_40 = wordslist.splice(3900, 3999);
        const group_41 = wordslist.splice(4000, 4099);
        const group_42 = wordslist.splice(4100, 4199);
        const group_43 = wordslist.splice(4200, 4299);
        const group_44 = wordslist.splice(4300, 4399);
        const group_45 = wordslist.splice(4400, 4499);
        const group_46 = wordslist.splice(4500, 4599);
        const group_47 = wordslist.splice(4600, 4699);
        const group_48 = wordslist.splice(4700, 4799);
        const group_49 = wordslist.splice(4800, 4899);
        const group_50 = wordslist.splice(4900, 4999);
        const group_51 = wordslist.splice(5000, 5099);
        const group_52 = wordslist.splice(6100, 6199);
        const group_53 = wordslist.splice(7000, 7199);
        const group_54 = wordslist.splice(5200, 5299);
        const group_55 = wordslist.splice(5300, 5399);
        const group_56 = wordslist.splice(5400, 5499);
        const group_57 = wordslist.splice(5500, 5599);
        const group_58 = wordslist.splice(5600, 5699);
        const group_59 = wordslist.splice(5700, 5799);
        const group_60 = wordslist.splice(5800, 5899);
        const group_61 = wordslist.splice(5900, 5999);
        const group_62 = wordslist.splice(6000, 6099);
        
        if (wordslist === undefined || wordslist.length === 0) {
            return (
                <div className="pre_word">
                    <h5>It looks like there was an erro! please refill the inputs to get the words
                    </h5>
                    <button className="btn_search">
                        <Link className="links" to="/word"> Go Back</Link>
                    </button>
                </div>
            )
        } else {
            return (
                <>
                <section className="nav_header">
                <Nav/>
              </section>
                <Carousel responsive={responsive}>
                    <div className="App-header">
                        {group_1.map((value, letter_group1) => {
                            return (
                                <Link className="link_google"
                                    to={{
                                    pathname: `/google/${value}`,
                                    state: {word:value}
                                }}>
                                <div className="word_content">
                                    <p>{value}</p>
                                </div>
                             </Link>
                            )
                        })}
                    </div>
                        <div className="App-header">
                            {group_2.map((value, letter_group2) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_3.map((value, letter_group3) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_4.map((value, letter_group4) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_5.map((value, letter_group5) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_6.map((value, letter_group6) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_7.map((value, letter_group7) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_8.map((value, letter_group8) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_9.map((value, letter_group9) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_10.map((value, letter_group10) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_11.map((value, letter_group11) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_12.map((value, letter_group12) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_13.map((value, letter_group13) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_14.map((value, letter_group14) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_15.map((value, letter_group15) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_16.map((value, letter_group16) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_17.map((value, letter_group17) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_18.map((value, letter_group18) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                       <div className="App-header">
                        {group_19.map((value, letter_group19) => {
                            return (
                                <Link className="link_google"
                                    to={{
                                    pathname: `/google/${value}`,
                                    state: {word:value}
                                }}>
                                <div className="word_content">
                                    <p>{value}</p>
                                </div>
                             </Link>
                            )
                        })}
                    </div>
                        <div className="App-header">
                            {group_20.map((value, letter_group20) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_21.map((value, letter_group21) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_22.map((value, letter_group22) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_23.map((value, letter_group23) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_24.map((value, letter_group24) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_25.map((value, letter_group25) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_26.map((value, letter_group26) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_27.map((value, letter_group27) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_28.map((value, letter_group28) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_29.map((value, letter_group29) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_30.map((value, letter_group30) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_31.map((value, letter_group31) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_32.map((value, letter_group32) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_33.map((value, letter_group33) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                           <div className="App-header">
                            {group_34.map((value, letter_group34) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_35.map((value, letter_group35) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_36.map((value, letter_group36) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_37.map((value, letter_group37) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_38.map((value, letter_group38) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_39.map((value, letter_group39) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_40.map((value, letter_group40) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_41.map((value, letter_group41) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                           <div className="App-header">
                            {group_42.map((value, letter_group42) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_43.map((value, letter_group43) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_44.map((value, letter_group44) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_45.map((value, letter_group45) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_46.map((value, letter_group46) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_47.map((value, letter_group47) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_48.map((value, letter_group48) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_49.map((value, letter_group49) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_50.map((value, letter_group50) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_51.map((value, letter_group51) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_52.map((value, letter_group52) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_53.map((value, letter_group53) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_54.map((value, letter_group54) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_55.map((value, letter_group55) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                            <div className="App-header">
                            {group_56.map((value, letter_group56) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_57.map((value, letter_group57) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_58.map((value, letter_group58) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_59.map((value, letter_group59) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_60.map((value, letter_group60) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_61.map((value, letter_group61) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="App-header">
                            {group_62.map((value, letter_group62) => {
                                return (
                                    <Link className="link_google"
                                        to={{
                                            pathname: `/google/${value}`,
                                            state: { word: value }
                                        }}>
                                        <div className="word_content">
                                            <p>{value}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </Carousel>
                    </>
            );
        }
    }
}

export default Main;