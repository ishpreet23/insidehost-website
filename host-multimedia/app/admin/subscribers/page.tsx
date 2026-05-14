import SubscriberTable from "@/components/admin/SubscriberTable";

export default function SubscribersPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-black text-white">
          Newsletter Subscribers
        </h1>

        <p className="text-gray-400 mt-2">
          Users subscribed from your website footer.
        </p>
      </div>

      <SubscriberTable />

    </div>
  );
}