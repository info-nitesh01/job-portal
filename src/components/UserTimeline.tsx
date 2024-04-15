
"use client";

import { Squares2X2Icon } from "@heroicons/react/16/solid";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function UserTimeline() {
    return (
        <Timeline className="my-10">
            <Timeline.Item>
                <Timeline.Point icon={Squares2X2Icon} />
                <Timeline.Content>
                    <Timeline.Title className="text-theme-green -mt-1 font-semibold ">Description</Timeline.Title>
                    <Timeline.Body className="leading-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={Squares2X2Icon} />
                <Timeline.Content>
                    <Timeline.Title className="text-theme-green -mt-1 font-semibold ">Education</Timeline.Title>
                    <Timeline.Body>
                        <ul className="leading-9">
                            <li>PHD degree in Criminal Law at University of Gable Internatinal (2006) </li>
                            <li>Master of Family Law at University of Gable International (2002) </li>
                            <li>MBBS LLB (Hon’s) in at University of Gable International (2002) </li>
                            <li>Higher Secondary Certificate at Gable International collage (1991) </li>
                        </ul>
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={Squares2X2Icon} />
                <Timeline.Content>
                    <Timeline.Title className="text-theme-green -mt-1 font-semibold ">Research</Timeline.Title>
                    <Timeline.Body className="leading-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point icon={Squares2X2Icon} />
                <Timeline.Content>
                    <Timeline.Title className="text-theme-green -mt-1 font-semibold ">Work Experiences</Timeline.Title>
                    <Timeline.Body>
                        <ul className="leading-9">
                            <li>Hand On experience with Wordpress </li>
                            <li>Better knowledge of front-end technologies, including HTML5, CSS3, JavaScript, jQuery</li>
                            <li>Belief – believing in yourself and those around you</li>
                            <li>Experience designing and developing responsive design websites</li>
                        </ul>
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    );
}
