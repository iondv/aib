Эта страница на [русском](./README_RU.md)

# IONDV. Artificial Intelligence Bus

**Artificial Intelligence Bus** (AIB) is a module of the IONDV. Framework digital tool platform. The module is designed for creating complex multi-agent systems -  the systems consisting of a variety of software solutions operating with a common signal source and processing results for other agents.
Any software technology, including systems for recognition or processing images, sounds, texts, signals from various sensors, performance indicators of an enterprise or markets (for example, the value of shares in stock markets) can act as an agent.

The set of the IONDV. Framework, the module, the contracts for connecting agents as applications, and the visual editor builds the IONDV. Artificial Intelligence Framework constructor of artificial intelligence systems.

### Status
The module is currently at the initial stage of development along with the demo applications. You can track the progress by the issues: https://github.com/iondv/aib/issues

### IONDV. Framework in brief

**IONDV. Framework** is a node.js open source application that implements the functionality of a digital tool platform for rapid development of web applications and micro-services based on metadata and can be extended with modules. The main purpose of the complex of solutions is to speed up the development of accounting web applications (ERP) using low-code technology. This platform consists of the following open-source components: the [IONDV. Framework](https://github.com/iondv/framework), the [modules](https://github.com/topics/iondv-module) and the ready-made applications expanding its functionality, as well as the  [Studio](https://github.com/iondv/studio) open source visual development environment to create metadata of an application. The developed application can be launched in 80 seconds.

* For more details, see [IONDV. Framework site](https://iondv.com). 

* Documentation is available at [Github repository](https://github.com/iondv/framework/blob/master/docs/en/index.md).

## Description

**IONDV. Artificial Intelligence Framework** will provide the implementation of:
* collecting, marking up, and storing marked-up data from various sources:
  * web scraping. Status: partially implemented [web-scraping module](https://github.com/iondv/web-scraping) in operation.
  * markup, image normalization, creation, training and comparison of Tensor Flow models without programming in the [IONDV. Tensorflow-dataset](https://github.com/iondv/tensorflow-dataset) open source application. Status: in active development. The planned release date: October 15, 2020.
  * integration with external systems for receiving and issuing data (REST-API, SOAP API). 
     Status: implemented as modules [REST](https://github.com/iondv/rest) and [SOAP](https://github.com/iondv/soap)
  * storage of large amounts of hosted data. Status: implemented in the [system core](https://github.com/iondv/framework)
* operation with signals and agents carried out in this Artificial Intelligence Bus module. Status: currently under development. Key functionality:
  * receiving any data as signals, calling agents subscribed to signals, transmitting the results of signal processing by agents to other agents 
  * registration of agents, monitoring their performance, saving the results of their activities, connecting agents to any analytical technologies, including ready-made ones:
    * TensorFlow
    * scikit-learn
    * natural.js
    * solutions in external languages: python, C/C++, C#
    * external web solutions for REST/SOAP API
    * our own analytical modules
    * analytical results based on external DBMS data, including in the R language   
  * visualization of the work of agents and their management in graphical form
  * visualization and output of agents’ "explanations" on the decisions made
  * saving decision samples for further analysis and quality control of analytical systems
  * fixing and storing the obtained results, transferring the results (for example, recommendations for buying shares, based on analysis) to external systems
  * parameterization of agents and analytical modules which they loaded
  * training mode and testing mode for analytical models based on historical data
* displaying system performance metrics and transmitting them to external systems

## Examples of using the module
The module is currently under development. Related modules and demo applications are developed along with it:
 * **[IONDV. Tensorflow-dataset](https://github.com/iondv/tensorflow-dataset)** - an application for markup, image normalization, creation, training, and comparison of Tensor Flow models without programming. License: Apache 2.
 * **[Web scraping module](https://github.com/iondv/web-scraping)** - the module is designed to receive additional data for agents and save the results or transfer them as input signals to the AIB bus of the module. Demo application example: [Freight-Quote repository](https://github.com/iondv/freight-quote), [How-to-use video](https://www.youtube.com/watch?v=-2IfSOecc_w) and [Freight-Quote demo application](https://freight-quote.iondv.com). License: Apache 2.
 * **[Trading app](https://github.com/iondv/trading)** - an application for demonstrating the capabilities of modules on the example of the stock market. Status: currently under development.  License: Apache 2. Key functionality:
   * receiving data by web scraping investing.com web site using key indicators of the American market (SPY) and transmitting them to an agent in the AIB bus to generate input signals
   * receiving data from the Quick application connected to the broker using the observed indicators of the Russian market and transmitting them to the agent in the AIB bus for generating input signals
   * several types of agents analyze the signals they are subscribed to and give predictive signals of potential index movement
   * aggregator agents which are subscribed to index movement signals make decisions on the actions to be performed
   * agents associated with the brokerage program transfer tasks to perform actions on the exchange 
 * **[Fashion Goods app](https://github.com/iondv/fashion-goods)** - application for automatic classification of product types based on TensorFlow, the [Fashion MNIST](https://github.com/zalandoresearch/fashion-mnist) dataset and 
   [training model](https://www.tensorflow.org/tutorials/keras/classification?hl=ru). Status: working prototype, awaiting transfer to the AIB bus. 
 * **Application for analyzing the quality of state and municipal services in electronic form** Status:  implemented on a complex of various technologies: iondv. framework, gitlab CI, puppeteer, [natural.js](https://github.com/NaturalNode/natural).
    The transfer to an application based on the AIB bus is currently in progress. License: IONDV LLC.
 * **Analysis of available slots for doctor appointments and the quality of the clinic's work** Status: implemented on a complex of various technologies: iondv. framework, gitlab CI, puppeteer. The transfer to an application based on the AIB bus is currently in progress.
 
  
 --------------------------------------------------------------------------  
 
 
  #### [Licence](/LICENSE) &ensp;  [Contact us](https://iondv.ru) &ensp;  [Russian](./README_RU.md)   &ensp;           
 
 
 --------------------------------------------------------------------------  
 
 Copyright (c) 2020 **LLC "ION DV"**.  
 All rights reserved. 
