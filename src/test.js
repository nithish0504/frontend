import { get } from "http";
import React, { useState, useEffect } from "react";
import { PassThrough } from "stream";

function heaven() {
  console.log("hello");
}

function getuniversities(arr1) {
  console.log(arr1);
}

function start(arr, arr1) {
  let toggle_div = document.getElementById("toggle_div");
  toggle_div.classList.remove("dn");
  let ele = document.getElementById("streams_div");
  ele.textContent = "";
  arr.map((item) => {
    let render_el = document.createElement("div");
    render_el.classList.add("rect195");
    render_el.onclick = getuniversities(arr1);
    ele.appendChild(render_el);
    let streamEl = document.createElement("p");
    streamEl.classList.add("stream");
    streamEl.textContent = item;
    render_el.appendChild(streamEl);
  });
}

async function handleclickevents(event) {
  event.currentTarget.classList.add("turn-blue");
  let c = event.currentTarget.textContent;

  let stream_url = "http://localhost:3000/streams/" + `${c}`;

  let options = {
    method: "GET",
  };

  let { streams, universities } = await fetch(stream_url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      return jsonData;
    });
  start(streams, universities);
  //   const uni = await fetch(stream_url, options)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (jsonData) {
  //       let { streams, universities } = jsonData;
  //       start(streams, universities);
  //     });
  console.log(universities);
  return universities;
}

export { handleclickevents, getuniversities, start, heaven };

console.log(module);
