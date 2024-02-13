import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import MiniCard from "./MiniCard";

const RelatedTopics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Topics</CardTitle>
        <Separator />
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-5 divide-y-2">
          <MiniCard
            title="Artificial Intelligence"
            value="20"
            percentage="10%"
          />

          <MiniCard
            title="Artificial Intelligence"
            value="20"
            percentage="10%"
          />

          <MiniCard
            title="Artificial Intelligence"
            value="20"
            percentage="10%"
          />

          <MiniCard
            title="Artificial Intelligence"
            value="20"
            percentage="10%"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedTopics;
