import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import banner from "../imaages/mainbanner.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [longURL, setLongURL] = useState();
  const navigate = useNavigate();
  const handleShorten = (e) => {
    e.preventDefault();
    if (longURL) navigate(`/auth?CreateNew=${longURL}`);
  };
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only URL Shortener <br /> you&rsquo;ll ever need!
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          value={longURL}
          placeholder="Enter the Url"
          onChange={(e) => setLongURL(e.target.value)}
        />
        <Button type="submit" variant="destructive">
          Shorten!
        </Button>
      </form>
      <img src={banner} alt="" className="w-full my-11 md:px-11 rounded-md" />

      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the URL shortener works?</AccordionTrigger>
          <AccordionContent>
            When you enter a log URL,our system generates a shorter version of
            that URL.This shortened URL redirects to the original long URL when
            accessed
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does the URL shortener works?</AccordionTrigger>
          <AccordionContent>
            When you enter a log URL,our system generates a shorter version of
            that URL.This shortened URL redirects to the original long URL when
            accessed
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How does the URL shortener works?</AccordionTrigger>
          <AccordionContent>
            When you enter a log URL,our system generates a shorter version of
            that URL.This shortened URL redirects to the original long URL when
            accessed
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Landing;
