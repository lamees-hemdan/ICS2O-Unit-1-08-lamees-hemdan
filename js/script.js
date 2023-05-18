// Copyright (c) 2023 Lamees Hemdan All rights reserved
//
// Created by: Lamees Hemdan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-1-08-lamees-hemdan/sw.js", {
    scope: "/ICS2O-Unit-1-08-lamees-hemdan/",
  })
}

  function myButtonClicked() {
    alert("Hello,World!")
  }
  