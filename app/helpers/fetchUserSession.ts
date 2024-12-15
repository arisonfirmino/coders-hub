import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { db } from "@/app/lib/prisma";

export const fetchUserSession = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const user = await db.user.findUnique({
    where: { id: session.user.id },
  });

  return user;
};
