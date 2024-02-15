import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

const CategoriesCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
        <Separator />
      </CardHeader>

      <CardContent className="flex flex-wrap items-center gap-4">
        <Badge className="text-blue-600 bg-blue-600/20 hover:bg-blue-600 hover:text-white cursor-default">
          <p>Artificial Intelligence</p>
        </Badge>
        <Badge className="text-blue-600 bg-blue-600/20 hover:bg-blue-600 hover:text-white cursor-default">
          <p>Finance</p>
        </Badge>
        <Badge className="text-blue-600 bg-blue-600/20 hover:bg-blue-600 hover:text-white cursor-default">
          <p>Technology</p>
        </Badge>
        <Badge className="text-blue-600 bg-blue-600/20 hover:bg-blue-600 hover:text-white cursor-default">
          <p>Concept</p>
        </Badge>
      </CardContent>
    </Card>
  );
};

export default CategoriesCard;
