import React from 'react';

import './Info.css';

export default function Info(){
    return (
        <div className="info-container">
            <section>
                <header>
                    <h1>TNome do filme</h1>
                    <span>05/04/1986</span>
                </header>
                <article>
                    <div className="info-content">
                        <div className="synopsis">
                            <h2>Sinopse</h2>
                            <span>
                                A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.
                                A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.
                            </span>
                        </div>
                        <div className="information">
                            <h2>Informações</h2>
                            <ul>
                                <li>
                                    <h2>Situação</h2>
                                    <span>Lançado</span>
                                </li>
                                <li>
                                    <h2>Situação</h2>
                                    <span>Lançado</span>
                                </li>
                                <li>
                                    <h2>Situação</h2>
                                    <span>Lançado</span>
                                </li>
                                <li>
                                    <h2>Situação</h2>
                                    <span>Lançado</span>
                                </li>
                                <li>
                                    <h2>Situação</h2>
                                    <span>Lançado</span>
                                </li>
                            </ul>
                        </div>
                        <footer>
                            <div className="info-genres">
                                <span>Aventura</span>
                                <span>Comédia</span>
                            </div>
                            <div className="popularity">
                                <span>99%</span>
                            </div>
                        </footer>
                    </div>
                    <img
                        src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'}
                        alt="poster"
                    />
                </article>
                <div className="trailer"></div>
            </section>
        </div>
    );
}