import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut."
            },
            {
                icon:<FaHiking/>,
                title: "Endless hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut."
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut."
            },
            {
                icon:<FaBeer/>,
                title: "Strongest beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut."
            }
        ]
    }

    render() {
        return (
            <section className="services">
              <Title title="services" />
              <div className="services-center">
                  {this.state.services.map((service, index) => {
                      return <article key={index} className="service">
                          <span>{service.icon}</span>
                          <h6>{service.title}</h6>
                          <p>{service.info}</p>
                      </article>
                  })}
              </div>
            </section>
        )
    }
}
