import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Search.css';

export default function Search(){
    const [search, setSearch] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="search"
                    placeholder="Busque um filme por nome ou gênero..."
                    onChange={event => setSearch(event.target.value)}
                    value={search}
                />
            </form>
            <Link to="/info">
                <section>
                    <img
                        src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'}
                        alt="poster"
                    />
                    <article>
                        <header>
                            <h1>
                                Nome do filme
                                <div className="popularity">
                                    <span>99%</span>
                                </div>
                            </h1>
                        </header>
                        <div className="release-date">05/04/1986</div>
                        <div className="content">
                            A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.
                            A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.
                        </div>
                        <footer>
                            <div className="genres">
                                <span>1</span>
                                <span>2</span>
                            </div>
                        </footer>
                    </article>
                </section>
            </Link>
        </div>
    );
}