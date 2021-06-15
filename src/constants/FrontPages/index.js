// Aaron Rozanski 0718031
// Newspaper Spiral Hopefully
// Constants FrontPages Index.js

import React, { Component } from "react";
import { motion } from "framer-motion";
import './index.css';

const FrontPageHTML = ({ newspaperName, city, state, month, day, year, imgFilter,
  picture, imgH, imgW, mainHeadline, mainSubHeading, fontHeader, fontHeadline, fontBody,
  mainStory, headlineTwo, storyTwo, author, imgCaption, style }) =>
(
<React.Fragment>
  <div className="newspaper_body">
  <div className="head">
		<div className="headerobjectswrapper">
			<div className="weatherforcastbox"><span style={{fontStyle: "italic"}}>Weather forceast for {city}, {state}: 
			Partly Cloudy</span><br />Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</div>
			<header style={{fontFamily: fontHeader}}>{ newspaperName }</header>
		</div>
		<div className="subhead">{ city }, { state } - { month } { day }, { year } - Seven Pages</div>
	</div>
	<div className="content">
		<div className="columns">
			<div className="column1">
				<div className="head"><span className="headline hl5" style={{fontFamily: fontHeadline}}>{ mainHeadline }</span>
					<p><span className="headline hl6">{ mainSubHeading }</span></p>
				</div>
				<p style={{fontFamily: fontBody}}>{ mainStory }</p>
        <div>
        <img src={picture} style={{filter: imgFilter}} height={ imgH } width={ imgW } alt='' />
        </div>
				{/*<figure className="figure">
					<img className="media" src={ picture } height="200px" width="200px" alt="" />
					<figcaption className="figcaption">{ imgCaption }</figcaption>
</figure>
*It can translate to an image with its a figure tag, not img or Image*/}
				<p style={{fontFamily: fontBody}}>{ mainStory }</p>
				<p style={{fontFamily: fontBody}}>{ mainStory }</p>
        <p style={{fontFamily: fontBody}}>{ mainStory }</p>
        <p style={{fontFamily: fontBody}}>{ mainStory }</p>
			</div>
			<div className="column2">
				<div className="head"><span className="headline hl1">{ headlineTwo }</span>
					<p><span className="headline hl4">by { author }</span></p>
				</div>
				<p style={{fontFamily: fontBody}}>{ storyTwo }</p>
				<p style={{fontFamily: fontBody}}>{ storyTwo }</p>
        <p style={{fontFamily: fontBody}}>{ storyTwo }</p>
			</div>
		</div>
	</div>
  </div>
</React.Fragment>
);


const FrontPageOldSchool = ({ newspaperName, city, state, month, day, year, imgFilter,
  picture, imgH, imgW, mainHeadline, mainSubHeading, fontHeader, fontHeadline, fontBody,
  mainStory, headlineTwo, storyTwo, author, imgCaption, style }) =>
(
<React.Fragment>
  <div className="oldSchool">
<div className="paper">
  <div className="titleDiv">
    <div className="title">{newspaperName}</div>
  </div>
  <div className="aboutTitle">
    <div className="vol">{city}, {state}</div>
    <div className="date">{day} {month} {year}</div>
    <div className="price">50&cent</div>
  </div>
  <div className="content">
    <div className="item" id="item1">
        <h4 className="storyTitle1">{mainHeadline}</h4>
        <p className="by by1">{mainHeadline}</p><img className="image image1" src="./images/testimage.jpg" />
        <p className="story story1">{mainStory}</p>
    </div>
    <div className="item" id="item2">
        <h4 className="storyTitle storyTitle2">{mainHeadline}</h4>
        <p className="by by2">{headlineTwo}</p><img className="image image2" src="./images/testimage.jpg" />
        <p className="story story2">{storyTwo}</p>
    </div>
    <div className="item" id="item3">
        <h4 className="storyTitle storyTitle3">{mainHeadline}</h4>
        <p className="by by3">{mainSubHeading}</p><img className="image image3" src="./images/testimage.jpg" />
        <p className="story story3">{mainStory}</p>
    </div>
    <div className="item" id="item4">
        <h4 claclassNamess="storyTitle storyTitle4">{mainHeadline}</h4>
        <p className="by by6">{mainSubHeading}</p>
        <p className="story story6">{mainStory}</p>
    </div>
    <div className="item" id="item5">
        <h4 className="storyTitle storyTitle5">{mainHeadline}</h4>
        <p className="by by7">{author}</p>
        <p className="story story7">{mainStory}</p>
    </div>
    <div className="item" id="item6">
      <h4 className="storyTitle weatherTitle">Current Weather</h4>
      <h4 className="story conditions">Partly Cloudy</h4>
      <p className="story temp">54&#8457;</p>
    </div>
  </div>
</div>
</div>
</React.Fragment>
);

const FrontPageCompany = ({ newspaperName, city, state, month, day, year, imgFilter,
  picture, imgH, imgW, mainHeadline, mainSubHeading, fontHeader, fontHeadline, fontBody,
  mainStory, headlineTwo, storyTwo, author, imgCaption, style }) =>
(
<React.Fragment>
<div class="news-page">
  <div class="news-page__section publisher">

    <div class="publisher_name">
      <div class="newspaperName">{Newspaper Name}</div>
      <div class="tagline">THE WIZARD WORLD'S BEGUILING BROADSHEET OF CHOICE</div>
    </div>
  </div>
  <div class="news-page__section exclusive-story">
    <div class="exclusive-story__marker">exclusive</div>
    <div class="exclusive-story__preview">
      <div class="preview-title">
        <span class="text--uppercase display--block">inside the</span>
        <span>{rest of title}</span>
      </div>
      <div class="preview-content-wrapper">
        <div class="preview-content">
          <div class="preview-content--left">
            What are mugglers really like? Do mugglers dream of electric sheep? These and many more questions are discussed with the top authoroties in the field of
          </div>
          <div class="preview-content--right">
            modern muggler studies. Is it possible that mugglers are not too different from ourselves? Can we in fact learn from the fate of our underdeveloped cousins?
          </div>
        </div>
        <div class="preview-content--link">
            Read the Full story on Page 6.
          </div>
      </div>
    </div>
  </div>
  <div class="news-page__section stories">
    <div class="story story--main">
      <div class="column column--left">
        <!--  start: story title        -->
        <div class="story-title">
          <div class="story-title--first-line">
            
            <div class="title-text text--normal">{mainHeadlineOne}</div>
          </div>
          <div class="story-title--second-line">
            <div class="title-text text--normal">{mainHeadlineTwo}</div>
          </div>
        </div>
        <!--  end: story title        -->

        <!--  start: story content        -->
        <div class="story-content">
          <div class="story-column column--first">
            <div class="paragraph first">
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</p>
            </div>
            <div class="paragraph">
              <p class="text--capitalize-first">Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div class="paragraph">
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
          </div>
          <div class="story-column column--second-third">
            <p class="story-featured-photo"><img src="http://redonion.se/cssgrid/images/tornado508.jpg" alt=""></p>
            <!--      start: blockquote        -->
            <div class="blockquote-wrapper">
              <div class="blockquote-title">
                <div class="text--normal">{Blockquote Snippet}</div>
              </div>
              <div class="blockquote-content">
                We're prepared for anything. Dealing with bad weather is not a problem. Quidditch is an outdoor sport, and as such, Nature is a part of the game. Playing in rough conditions is in fact something me and my crew are used to.
              </div>

            </div>
            <!--      end: blockquote        -->
            <div class="columns-wrapper">
              <div class="column first">
                <div class="paragraph">
                  <p>Veteran Captain Oliver Wood did not seem too anxious about the hurricane threat as he and some of his fellow crew met reporters in the lobby at player hotel this morning. At vero eos et accusamus et iusto.</p>
                </div>
                <div class="paragraph">
                  <p>Ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.</p>
                </div>
              </div>
              <div class="column">
                <div class="paragraph">
                  <p>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                </div>
                <div class="paragraph">
                  <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  end: story content        -->

      </div>

      <div class="column column--right">
        <div class="author">
          <div class="name">{author}</div>
          <div class="footnote">reports</div>
        </div>
        <div class="paragraph">
          <p class="text--capitalize-first">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        </div>
        <div class="paragraph">
          <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
            quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
        </div>
        <div class="paragraph">
          <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
            alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
        <div class="paragraph">
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <div class="paragraph">
          <p>Corrupti quos dolores.</p>
        </div>
      </div>
    </div>
    <div class="story-divider"></div>
    <div class="story story--secondary">
      <div class="columns-wrapper">
        <div class="column first">
          <p class="story-title--secondary">
            {storyTwoHeadline}
          </p>
          <div class="story-featured-photo">
            <img src={} alt="">
          </div>
          <div class="caption">
            <div class="caption_content">“THERE IS ENOUGH MAGIC FOR ALL”</div>
            <div class="page-number">page 12</div>
          </div>
        </div>
        <div class="column second">
          <div class="story-title--third">
            <div class="first-part">
              <small>ALBUS SEVERUS POTTER</small> Scandal
            </div>
            <div class="second-part">
              In Polyjuice
              <small>Potter was discovered trying to enter girls dorm under the influence of polyjuice.</small>
            </div>
          </div>
          <div class="story-content--third">
            <img src="http://redonion.se/cssgrid/images/potions200.jpg" alt="">
            <div class="paragraph">
              <p class="text--capitalize-first">A Hogwarts spokesperson says the incident will not be taken lightly, since it was only a few months ago young Potter was involved in a similar incident. Parents of the Hufflepuff girls are now putting preassure on the school to assure the
                safety of their children.</p>
            </div>
            <div class="paragraph">
              <p>An anonymous source says the Potter boy has been harassing girls and bullying his fellow students since he started at Hogwarts. The source also says that because of his family name, professors and staff are too scared to act. Neither one
                of the boy's parents wanted to comment the event.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- end: stories   -->

  <!--  start: weather section    -->
  <div class="news-page_section weather">
    <div class="section-divider" title="Weather"></div>
    <div class="columns-wrapper column--weathers">
      <div class="column column--weather">
        <div class="weather_value">
          27 <span class="weater_value_measurement">*F</span> </div>
        <div class="weather_city">
          {cityOne}
        </div>
      </div>
      <div class="column column--weather">
        <div class="weather_value text_shadow--cold">
          19 <span class="weater_value_measurement">*F</span> </div>
        <div class="weather_city">
          {cityTwo}
        </div>
      </div>
      <div class="column column--weather">
        <div class="weather_value text_shadow--cold">
          18 <span class="weater_value_measurement">*F</span> </div>
        <div class="weather_city">
          {cityThree}
        </div>
      </div>

      <div class="column column--weather">
        <div class="weather_value">
          24 <span class="weater_value_measurement">*F</span> </div>
        <div class="weather_city">
          {cityFour}
        </div>
      </div>

      <div class="column column--weather">
        <div class="weather_value text_shadow--hot">
          84 <span class="weater_value_measurement">*F</span> </div>
        <div class="weather_city">
          {cityFive}
        </div>
      </div>

      <div class="column column--weather">
        <div class="weather_value text_shadow--cold">
          12 <span class="weater_value_measurement">*F</span> </div>
        <div class="weather_city">
          {citySix}
        </div>
      </div>

    </div>
  </div>
  <!--  end: weather section    -->

  <!--  start: footer story    -->
  <div class="news-page_section story--footer">
    <div class="story-title--footer">
      {exclusiveTitle-fit}
    </div>
    <div class="story_excerpt_and_number">
      <div class="story_page_number">
        <div>page</div>
        <div class="number">7</div>
      </div>
      <div class="story_excerpt">
        <div>THE FULL STORY</div>
        <div class="text--lowercase">violence investigated</div>
      </div>
    </div>
  </div>
  <!--  end: footer story    -->
  <!-- start: table of topics -->
  <div class="news-page_section news-topics">
    <div class="columns-wrapper">
      <div class="column column_topic">
        <div class="topic">World</div>
        <div class="badge_number">7</div>
      </div>
      <div class="column column_topic">
        <div class="topic">National</div>
        <div class="badge_number">12</div>
      </div>
      <div class="column column_topic">
        <div class="topic">Local</div>
        <div class="badge_number">4</div>
      </div>
      <div class="column column_topic">
        <div class="topic">Business</div>
        <div class="badge_number">2</div>
      </div>
      <div class="column column_topic">
        <div class="topic">Leisure</div>
        <div class="badge_number">3</div>
      </div>
      <div class="column column_topic">
        <div class="topic">Sports</div>
        <div class="badge_number">6</div>
      </div>
      <div class="column column_topic">
        <div class="topic">Jobs</div>
        <div class="badge_number">13</div>
      </div>
      <div class="column column_topic">
        <div class="topic">Entertainment</div>
        <div class="badge_number">14</div>
      </div>
    </div>
  </div>
  <!-- end: table of topics -->
</div>
</React.Fragment>
);

export { 
  FrontPageHTML, 
  FrontPageOldSchool,
  FrontPageCompany, 
  templates,
};

/* not working...not exporting or at least cannot import into constants index file */